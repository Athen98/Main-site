export default function MailchimpSignup() {
  return (
    <section id="newsletter" className="section bg-neutral-50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Join the newsletter</h2>
        <p className="text-neutral-600 mt-2">Training insights, stories, and PHB updates.</p>
        <div className="card inline-block mt-6">
          <form
            action="https://YOURPREFIX.list-manage.com/subscribe/post?u=XXXX&id=YYYY"  // <-- paste your exact Mailchimp action
            method="post"
            target="_blank"
            noValidate
            className="flex flex-col md:flex-row gap-3 items-stretch"
          >
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="you@example.com"
              className="rounded-xl border p-3 md:w-80"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
