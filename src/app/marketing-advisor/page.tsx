import { Badge } from "@/components/ui/badge";
import { AdvisorForm } from "./AdvisorForm";

export default function MarketingAdvisorPage() {
    return (
        <>
             {/* Hero Section */}
            <section className="bg-secondary py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>AI-Powered Strategy</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline">
                        Your Personal Marketing Advisor
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Leverage the power of AI to get instant, tailored marketing recommendations. Simply describe your business and goals, and our advisor will suggest the optimal channels and strategies for you.
                    </p>
                </div>
            </section>

            {/* Advisor Form Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <AdvisorForm />
                </div>
            </section>
        </>
    );
}
