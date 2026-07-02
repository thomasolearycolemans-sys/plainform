/**
 * Plainform — configuration
 *
 * Keeps deployment-specific values (support contact, relay endpoint) out
 * of taskpane.html so they can change without touching markup, and so
 * this file can be swapped per-deployment without a merge conflict in
 * the HTML.
 */
window.PLAINFORM_CONFIG = {
  // Shown in the Help panel's "support contact" link.
  supportContactName: "Thomas Coleman",
  supportContactHref: "mailto:support@example.org", // replace with real contact

  // Base URL of the user-hosted relay that holds the Gemini API key.
  // Never call the Gemini API directly from this file with an embedded key.
  aiRelayUrl: "", // e.g. "https://your-relay.example.org/review"
};
