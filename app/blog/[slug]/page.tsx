import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { posts } from "@/app/blog/data";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | De Tour Con Ali Blog`,
    description: post.description,
    alternates: { canonical: `https://detourconali.getyetti.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
    },
  };
}

// ─── Post content ─────────────────────────────────────────────────────────────

function ElYunqueContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <p>
        We are thrilled to announce that De Tour Con Ali now offers guided hiking tours through <strong>El Yunque National Forest</strong> — the only tropical rainforest in the entire US National Forest System. Located in the northeastern corner of Puerto Rico, El Yunque is one of the most biodiverse ecosystems in the Caribbean.
      </p>

      <h2>The Cloud Forest Hike</h2>
      <p>
        Our signature El Yunque tour takes you deep into the Cloud Forest — a mystical zone that represents <strong>less than 2% of the total area of El Yunque</strong> and sits above 2,500 feet elevation. The Cloud Forest is unique and marvelous, with near-constant mist, ancient dwarf trees, and spectacular panoramic views.
      </p>
      <p>
        The hike covers approximately <strong>6 miles roundtrip</strong> and is classified as high-intensity with an 8-degree incline. This is a real adventure for those who want more than just a scenic drive.
      </p>

      <h2>Tour Details</h2>
      <ul>
        <li><strong>Duration:</strong> 6 hours total</li>
        <li><strong>Group size:</strong> Up to 6 people</li>
        <li><strong>Price:</strong> $125 per person</li>
        <li><strong>Included:</strong> Dry bag, bottled water, and granola bar</li>
      </ul>

      <h2>Highlights Along the Trail</h2>
      <ul>
        <li>
          <strong>Mt. Britton Observation Tower</strong> — A historic stone tower with sweeping views
          of the Atlantic Ocean on clear days
        </li>
        <li>
          <strong>El Yunque Peak (3,494 ft)</strong> — The highest summit in the forest, surrounded by
          clouds and native vegetation
        </li>
        <li>
          <strong>Los Picachos Peak</strong> — Another dramatic peak with stunning vistas over the
          rainforest canopy
        </li>
      </ul>

      <h2>The Cloud Forest Ecosystem</h2>
      <p>
        El Yunque receives more than <strong>200 inches of rainfall per year</strong>, keeping temperatures around 62°F and creating constant water saturation in the upper forest. This moisture-rich environment supports approximately <strong>97 plant species</strong>, with 40% endemic to Puerto Rico — found nowhere else on Earth.
      </p>
      <p>
        You may spot the iconic <em>coquí</em> frog, colorful tropical birds, and ancient tree ferns that have remained unchanged for millions of years. Our certified guides know the ecosystem intimately and will bring it to life for you.
      </p>

      <h2>Who Is This Tour For?</h2>
      <p>
        This tour is best suited for adults and older teenagers who are comfortable with a moderate-to-strenuous hike on uneven terrain. Please wear sturdy closed-toe shoes and bring a light rain jacket — the Cloud Forest lives up to its name!
      </p>

      <p>
        Ready to experience El Yunque the way only locals know it? Book your spot today or contact us with any questions.
      </p>
    </div>
  );
}

function FamilyTripContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <p>
        Family vacations with children create some of the most lasting memories — even when (especially when!) things don&apos;t go exactly to plan. Puerto Rico is one of the best family destinations in the Caribbean: no passport needed for US citizens, English is widely spoken, and the mix of beaches, history, and nature offers something for every age.
      </p>
      <p>
        After years of guiding families around the island, our team at De Tour Con Ali has learned what really makes a family trip to Puerto Rico work. Here are our four key tips.
      </p>

      <h2>1. Involve Your Kids in the Planning</h2>
      <p>
        When kids are involved in the planning from the beginning, it makes them more excited for what&apos;s to come. Let them pick one or two must-do activities. Maybe they&apos;ve seen a video of the bioluminescent bay and can&apos;t stop talking about it — make that their priority. Ownership of the itinerary means less resistance on the day.
      </p>

      <h2>2. Avoid Over-Scheduling</h2>
      <p>
        It&apos;s tempting to pack every day with activities when you&apos;ve come all the way to Puerto Rico. Resist the urge. Leave room for spontaneity — an unexpected roadside food truck, a beach that&apos;s too pretty to drive past, or simply a lazy afternoon at the pool. Some of the best family travel moments happen in the gaps.
      </p>

      <h2>3. Don&apos;t Overcrowd the Itinerary</h2>
      <p>
        Build in real rest time between activities, especially if you have young children. Trying to do El Yunque in the morning <em>and</em> Old San Juan in the afternoon on day one is a recipe for meltdowns. Pick one big thing per day and do it well.
      </p>

      <h2>4. Maintain Flexibility</h2>
      <p>
        Weather changes, kids get tired, and sometimes the best attraction was the one you stumbled across by accident. Embrace detours. Our tours are always flexible — if the group wants to spend an extra hour at a waterfall instead of moving on, we make it happen.
      </p>

      <h2>Let Us Handle the Logistics</h2>
      <p>
        De Tour Con Ali offers kid-friendly tours across Puerto Rico with experienced guides who know how to pace things for families. Our vehicles are air-conditioned and comfortable, and we handle all the route planning, parking, and permits so you can focus on making memories.
      </p>
      <p>
        From waterfall hikes to cultural sightseeing, we have something for every age group. Contact us today to build the perfect Puerto Rico family adventure.
      </p>
    </div>
  );
}

function TourGuideTipsContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <p>
        Puerto Rico is the ideal Caribbean destination for any type of traveler. Want to spend the day on a pristine beach? Done. Prefer exploring a historic colonial city? Old San Juan has you covered. Looking for caves, hiking, and hidden waterfalls? We know exactly where to take you.
      </p>
      <p>
        After more than a decade of guiding visitors around the island, our team has put together the most important tips we share with every traveler before they arrive.
      </p>

      <h2>Why Choose a Private Tour</h2>
      <p>
        Joining a private guided tour transforms the Puerto Rico experience in ways that independent travel rarely can:
      </p>
      <ul>
        <li>
          <strong>Smaller group sizes</strong> — More personalized attention and access to spots that large tour buses simply cannot reach
        </li>
        <li>
          <strong>Cost-effective</strong> — We know the best local spots, so you avoid overpriced tourist traps. Your money goes further with a local guide.
        </li>
        <li>
          <strong>Flexible scheduling</strong> — We work around your hotel check-in, flight times, and energy levels
        </li>
        <li>
          <strong>Customized itineraries</strong> — Tell us what you love and we&apos;ll build the day around it
        </li>
      </ul>

      <h2>What to Pack</h2>
      <p>
        Puerto Rico has a tropical climate year-round, so pack accordingly:
      </p>
      <ul>
        <li>Summer clothing — lightweight fabrics like cotton and linen</li>
        <li>Beach gear — swimsuit, towel, and water shoes for tours near water</li>
        <li>Hiking boots or sturdy sneakers for rainforest and waterfall tours</li>
        <li>A light rain jacket — afternoon showers are common and brief</li>
        <li>Insect repellent — especially important for El Yunque and rural areas</li>
      </ul>

      <h2>Budget Planning</h2>
      <p>
        Puerto Rico uses the US Dollar, so no currency exchange is needed for US visitors. Budget for accommodations (ranging from budget hostels to luxury resorts), transportation, and meals. Dining in Puerto Rico offers excellent value — from street food at roadside kioskos to world-class restaurants in San Juan.
      </p>

      <h2>A Few Legal Notes</h2>
      <ul>
        <li>The legal <strong>drinking age in Puerto Rico is 18</strong></li>
        <li>Car rental companies require drivers to be at least <strong>21 years old</strong></li>
        <li>No passport required for US citizens — a government-issued ID is sufficient</li>
      </ul>

      <p>
        Ready to explore Puerto Rico the right way? Book a tour with De Tour Con Ali and let us show you the island we call home.
      </p>
    </div>
  );
}

function PackingListContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
      <p>
        Puerto Rico is a beautiful island destination in the Caribbean — warm year-round, full of incredible landscapes, and perfect for adventure. Whether you&apos;re planning to hike through El Yunque, stroll the cobblestone streets of Old San Juan, or swim in a bioluminescent bay, what you pack can make or break the experience.
      </p>
      <p>
        Here are the six things our guides always remind visitors to bring.
      </p>

      <h2>1. Comfortable Shoes</h2>
      <p>
        Puerto Rico is more than just beaches. Old San Juan&apos;s cobblestone streets will destroy flimsy sandals, and El Yunque National Forest requires proper footwear for safe hiking. Bring a pair of comfortable walking shoes or sneakers in addition to your flip flops. If you&apos;re planning any hiking tours, closed-toe waterproof shoes are ideal.
      </p>

      <h2>2. Sunscreen</h2>
      <p>
        The Caribbean sun is intense year-round. Use a <strong>reef-safe sunscreen with SPF 30 or higher</strong> and apply it generously before heading out. Puerto Rico has rules protecting its marine ecosystems, so reef-safe formulas (avoiding oxybenzone and octinoxate) are strongly encouraged and increasingly required at certain beaches.
      </p>

      <h2>3. Bathing Suits</h2>
      <p>
        You will find opportunities to swim, snorkel, or wade through rivers and waterfalls on almost any tour we run. Pack at least two bathing suits so you always have a dry one ready for the next adventure.
      </p>

      <h2>4. Light Clothing</h2>
      <p>
        Puerto Rico&apos;s warm, humid climate calls for <strong>lightweight fabrics like cotton and linen</strong>. Leave heavy jeans and thick layers at home. Breathable, moisture-wicking clothing will keep you comfortable through even the most active days on the island.
      </p>

      <h2>5. A Wide-Brimmed Hat</h2>
      <p>
        Shade is your best friend in the Caribbean sun. A wide-brimmed hat protects your face, neck, and shoulders during outdoor tours and is especially valuable at beaches and ruins where there&apos;s limited natural shade.
      </p>

      <h2>6. A Backpack or Day Bag</h2>
      <p>
        A comfortable daypack keeps your hands free on tours and hikes. Use it for your sunscreen, water bottle, snacks, camera, and a dry change of clothes. We recommend a water-resistant bag for tours that include waterfalls or water activities.
      </p>

      <h2>Bonus Essentials</h2>
      <ul>
        <li><strong>Sunglasses</strong> — UV protection for the eyes is just as important as sunscreen</li>
        <li><strong>Mosquito repellent</strong> — Essential for rainforest and rural tours, especially near standing water</li>
        <li><strong>A beach bag</strong> — A lightweight tote for beach days so you can leave the daypack in the vehicle</li>
      </ul>

      <p>
        With the right gear, you can focus entirely on enjoying Puerto Rico. Book a tour with De Tour Con Ali and let us handle the rest — we bring the local knowledge, you bring the adventure spirit.
      </p>
    </div>
  );
}

const contentMap: Record<string, React.FC> = {
  "el-yunque-tours": ElYunqueContent,
  "family-trip-puerto-rico": FamilyTripContent,
  "tour-guide-tips-explore-puerto-rico": TourGuideTipsContent,
  "packing-list-puerto-rico": PackingListContent,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const ContentComponent = contentMap[slug];
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero / Feature Image */}
        <div className="relative h-[40vh] min-h-[320px] max-h-[480px] overflow-hidden bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="size-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container-px mx-auto max-w-4xl pb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              <Tag className="size-3" />
              {post.tag}
            </span>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Meta row */}
        <div className="border-b border-border bg-muted/30">
          <div className="container-px mx-auto max-w-4xl py-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="size-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="container-px mx-auto max-w-4xl py-12 md:py-16">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>

          {ContentComponent ? (
            <ContentComponent />
          ) : (
            <p className="text-muted-foreground">{post.description}</p>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/10 p-8 text-center">
            <h2 className="text-2xl font-bold">Ready to Experience Puerto Rico?</h2>
            <p className="mt-2 text-muted-foreground">
              Book a tour with our certified local guides and see the island like never before.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="cursor-pointer">
                <Link
                  href="https://book.peek.com/s/e5f2dedc-d99b-41da-b05c-af05a53280c2/9Eyvq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Tour
                </Link>
              </Button>
              <Button asChild variant="outline" className="cursor-pointer">
                <Link href="/services">View All Tours</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted/40 py-16">
            <div className="container-px mx-auto max-w-4xl">
              <h2 className="mb-8 text-2xl font-bold">More Articles</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="aspect-video overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={related.image}
                        alt={related.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {related.tag}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
