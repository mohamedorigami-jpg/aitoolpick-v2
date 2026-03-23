import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AIToolPick",
  description:
    "Learn about AIToolPick and how we review AI tools with honest, hands-on testing.",
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
          About AIToolPick
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-muted leading-relaxed mb-6">
            AIToolPick was created with a simple mission: help people find the
            right AI tools without the noise. The AI landscape is exploding with
            new products every week, and it&apos;s hard to know which ones are
            genuinely useful and which are just hype.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
            How We Review
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Every tool on this site is tested hands-on by our team. We sign up,
            use the product for real tasks, and evaluate it on features, ease of
            use, value for money, and customer support. We don&apos;t accept
            payment for higher rankings — ever.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
            Affiliate Disclosure
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Some links on this site are affiliate links. This means we may earn
            a small commission if you purchase through our link, at no extra cost
            to you. This helps us keep the site running and continue producing
            honest, in-depth reviews. Affiliate relationships never influence our
            ratings or recommendations.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
            Stay Updated
          </h2>
          <p className="text-muted leading-relaxed">
            AI tools change fast. We re-test and update our reviews monthly to
            ensure our recommendations stay current. Subscribe to our newsletter
            on the homepage to get weekly picks delivered to your inbox.
          </p>
        </div>
      </div>
    </main>
  );
}
