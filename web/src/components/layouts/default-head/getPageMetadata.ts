import {
  type CloudRegionName,
  isRegionProduction,
} from "@/src/features/organizations";

/**
 * Every region serves the same sign-in page, and the sign-in page is reached
 * with a `targetPath` query from shared traces. Google therefore sees many
 * URLs for one page and picks one of them; the canonical names that one page
 * so the choice is not left to the crawler.
 */
const CANONICAL_CLOUD_ORIGIN = "https://cloud.langfuse.com";

type PageMetadata = {
  title: string;
  description?: string;
  canonicalUrl?: string;
};

const cloudAuthPages: Record<string, PageMetadata> = {
  "/auth/sign-in": {
    title: "Sign in | Tracelight Cloud",
    description:
      "Sign in to Tracelight Cloud, the open source agent evals & observability platform. EU, US, Japan, and HIPAA data regions.",
  },
  "/auth/sign-up": {
    title: "Sign up | Tracelight Cloud",
    description:
      "Create a free Tracelight Cloud account. No credit card required. Trace, evaluate, and manage prompts for your LLM application.",
  },
};

const selfHostedAuthPages: Record<string, PageMetadata> = {
  "/auth/sign-in": {
    title: "Sign in | Tracelight",
    description:
      "Sign in to Tracelight, the open source agent evals & observability platform.",
  },
  "/auth/sign-up": {
    title: "Sign up | Tracelight",
    description: "Create a Tracelight account.",
  },
};

// Reached from e-mail links, not from search, so no region-specific copy.
// ResetPasswordPage swaps in "Set password" after hydration when the session
// shows the user has no password yet; that cannot be known from the route.
const passwordPages: Record<string, PageMetadata> = {
  "/auth/reset-password": {
    title: "Reset password | Tracelight",
    description: "Reset the password of your Tracelight account.",
  },
  "/auth/setup-password": {
    title: "Set password | Tracelight",
    description: "Set the password of your Tracelight account.",
  },
};

const defaultMetadata: PageMetadata = { title: "Tracelight" };

/**
 * Metadata that must be in the server-rendered HTML. Pages own their own
 * `<Head>`, but the auth pages render behind the session gate and never reach
 * the server response, so crawlers only see what is emitted here.
 *
 * `pathname` is the Next.js route (no query string), which is what makes the
 * canonical drop `?targetPath=`.
 */
export function getPageMetadata(
  pathname: string,
  region: CloudRegionName | undefined,
): PageMetadata {
  if (!region) {
    return (
      selfHostedAuthPages[pathname] ??
      passwordPages[pathname] ??
      defaultMetadata
    );
  }

  const metadata = cloudAuthPages[pathname] ?? passwordPages[pathname];
  if (!metadata) return defaultMetadata;

  // Staging and dev share the page but must not point Google at production.
  if (!isRegionProduction(region)) return metadata;

  return { ...metadata, canonicalUrl: `${CANONICAL_CLOUD_ORIGIN}${pathname}` };
}
