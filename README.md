# Grendi demo

An interactive demo of **Grendi**, a clothing marketplace for Cameroon (thrift and new, individuals and wholesalers). It is a clickable preview for the founders, not the production app.

Open the live demo, then switch roles in the top bar. Each role has its own login:

| Role | Login (demo) | What to try |
| --- | --- | --- |
| Buyer | +237 6 70 12 34 56, SMS code 1234 | Browse items in your own city only (Douala or Yaoundé), chat, make an offer, pay with MTN MoMo / Orange Money, choose home delivery or a pickup shop, chat with the rider during delivery, then **Validate the order** or **Report an issue**, and leave a written review |
| Seller | Pick a shop (individual or wholesaler), SMS code 1234 | Accept or counter offers, confirm and pack orders, enter the rider's pickup code, add a listing, change prices |
| Rider | +237 6 94 55 18 02, SMS code 1234 | Accept a job (opens the chat with the buyer), show the pickup code, enter the buyer's code or drop the parcel at a pickup shop; the chat closes after delivery |
| Pickup shop | Pick a partner shop, SMS code 1234 | See parcels coming in and held, hand them over against the buyer's pickup code, see earnings (home delivery fee − pickup-shop delivery fee) |
| Admin | ops@grendi.cm / demo2026 | Live map of all riders, live orders, pickup shops, frozen payments, seller and rider verification, listing review, payment ledger, disputes, riders, settings (commission, delivery fees, cash limits) |

**Payout rule:** the seller is paid only when the buyer validates the order, or automatically 48 hours after delivery with no reply. Reporting an issue freezes the payment until the Grendi team decides. "Simulate 48 h" shows the automatic payout.

**Live rider tracking:** once a rider accepts, the buyer, seller and rider each see the rider moving on a map of Douala, with distance and arrival time, first to the seller and then to the buyer. Everyone is notified on arrival. "Skip to arrival" jumps ahead during a presentation.

The guided panel on the left follows one order end to end and shows how long each step takes in simulated Douala time. French and English can be switched at any time. "Reset demo" starts over.

All people, shops and orders are fictional. Product photos are from [Unsplash](https://unsplash.com). Data is saved only in the viewer's browser.

Plain HTML, CSS and JavaScript, no build step. GitHub Pages deploys it from `main` through `.github/workflows/pages.yml`.
