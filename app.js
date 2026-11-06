/* Grendi interactive demo — buyer, seller, rider and admin apps sharing one live state.
   All data is fictional demo data. State is saved in this browser only. */
(function(){
'use strict';

/* ================= i18n ================= */
const T = {
fr:{
  demo:'Démo', buyer:'Acheteur', seller:'Vendeur', rider:'Livreur', admin:'Admin', reset:'Réinitialiser',
  demoClock:'Heure de la démo', guideTitle:'Démo guidée', guideSub:'Suivez une commande de bout en bout. Changez de rôle en haut : chaque rôle a sa propre connexion.',
  g1:'Choisir un article, discuter ou faire une offre, puis payer', g2:'Accepter l’offre, confirmer et emballer la commande', g3:'Accepter la course', g4:'Saisir le code d’enlèvement du livreur', g5:'Recevoir le code de livraison par SMS', g6:'Saisir le code du client à la porte', g7:'Voir le paiement versé, les vérifications et les réglages',
  open:'Ouvrir', timeline:'Chronologie de la commande', noOrder:'Aucune commande pour l’instant. Commencez côté Acheteur.', total:'Du paiement à la porte', legend:'Ce que montre la démo',
  lg1:'Argent bloqué par Grendi jusqu’au code de livraison', lg2:'Alertes aussi envoyées par SMS', lg3:'Les durées sont simulées pour refléter une journée réelle à Douala',
  // login
  welcome:'Le marché de vêtements du Cameroun, dans votre poche.', welcomeS:'Vendez et achetez de la friperie et du neuf, livrés chez vous.', sellerHero:'Vendez vos vêtements partout à Douala.', riderHero:'Gagnez de l’argent en livrant près de chez vous.',
  phone:'Numéro de téléphone', getCode:'Recevoir le code SMS', enterCode:'Entrez le code reçu par SMS', codeSent:'Code envoyé au', demoCode:'Code de démo : 1234', verify:'Vérifier et continuer', language:'Langue',
  chooseAcct:'Choisissez une boutique de démo', individual:'Particulier', wholesaler:'Grossiste', noEmail:'Pas besoin d’e-mail : votre numéro suffit.',
  adminLogin:'Console Grendi Ops', adminSub:'Accès réservé à l’équipe Grendi.', email:'E-mail', password:'Mot de passe', signIn:'Se connecter',
  // buyer
  hello:'Bonjour', searchPh:'Rechercher une robe, un jean, des baskets…', all:'Tout', women:'Femmes', men:'Hommes', kids:'Enfants', wholesale:'Gros', thrift:'Friperie', new:'Neuf',
  bannerT:'Payez seulement quand c’est livré', bannerS:'Grendi garde votre argent jusqu’à ce que vous donniez le code au livreur.', near:'Près de vous', results:'articles',
  home:'Accueil', orders:'Commandes', chats:'Messages', profile:'Profil', sell:'Vendre', listings:'Articles', earnings:'Gains', jobs:'Courses',
  size:'Taille', condition:'État', negotiable:'Prix négociable', fixed:'Prix fixe', verified:'Vérifié', sales:'ventes', since:'Sur Grendi depuis',
  chat:'Discuter', call:'Appeler', buy:'Acheter', makeOffer:'Faire une offre', agreed:'Prix convenu', perPiece:'pièce', lotOf:'Lot de', minOrder:'Commande minimum',
  offerTitle:'Proposer un prix', offerHint:'Le vendeur peut accepter, refuser ou proposer un autre prix.', sendOffer:'Envoyer l’offre', yourOffer:'Votre offre', offer:'Offre', counter:'Contre-offre',
  accept:'Accepter', decline:'Refuser', counterBtn:'Proposer', accepted:'Acceptée', declined:'Refusée', pending:'En attente', buyAt:'Acheter à',
  scam:'Attention : ne payez jamais en dehors de Grendi. Votre argent n’est protégé que dans l’app.', typeMsg:'Écrire un message…',
  q1:'Est-ce encore disponible ?', q2:'Vous livrez à Bonamoussadi ?', q3:'Il y a des taches ?', sq1:'Oui, disponible !', sq2:'Oui, livraison via Grendi.', sq3:'Très bon état, pas de taches.',
  calling:'Appel en cours…', callNote:'Appel via Grendi : votre numéro reste masqué.', endCall:'Raccrocher', callDur:'Durée',
  checkout:'Paiement', deliverTo:'Livrer à', zone:'Quartier', landmark:'Point de repère', landmarkPh:'Ex. : derrière la pharmacie du carrefour', payWith:'Payer avec',
  momo:'MTN Mobile Money', om:'Orange Money', cod:'Paiement à la livraison', codNote:'Payez le livreur en espèces, puis donnez-lui votre code.', item:'Article', delivery:'Livraison', totalL:'Total',
  escrowNote:'Grendi garde votre paiement. Le vendeur est payé seulement après votre code de livraison.', pay:'Payer', placeOrder:'Commander',
  confirmPay:'Confirmez le paiement', enterPin:'Entrez votre code PIN', pinHint:'Démo : tapez 4 chiffres', paySafe:'Paiement sécurisé', heldBy:'Montant gardé par Grendi',
  track:'Suivre la commande', myOrders:'Mes commandes', noOrders:'Pas encore de commande.', yourCode:'Votre code de livraison', codeHint:'Donnez ce code au livreur seulement après avoir vérifié l’article.',
  riderOnWay:'Votre livreur', rateSeller:'Notez le vendeur', rateThanks:'Merci ! Votre avis aide toute la communauté.', submit:'Envoyer', report:'Signaler un problème',
  dataSaver:'Économie de données', dataSaverS:'Images plus légères pour économiser votre forfait', logout:'Se déconnecter', notifications:'Notifications', help:'Aide et sécurité',
  smsFrom:'SMS de GRENDI', soldOut:'Vendu', waitingSeller:'En attente du vendeur', status:'Statut',
  // statuses
  st_placed:'Commande passée', st_confirmed:'Confirmée par le vendeur', st_ready:'Prête pour l’enlèvement', st_assigned:'Livreur vers le vendeur', st_picked:'En cours de livraison', st_completed:'Livrée · vendeur payé', st_cancelled:'Annulée · remboursée', st_refused:'Refusée à la porte · remboursée', st_disputed:'Litige en cours',
  // seller
  dash:'Tableau de bord', inEscrow:'Gardé par Grendi', paidOut:'Versé ce mois', activeOrders:'Commandes en cours', liveListings:'Articles en ligne', newOrder:'Nouvelle commande',
  confirmOrder:'Confirmer la commande', declineOrder:'Refuser', timeLeft:'Temps restant pour confirmer', markReady:'Emballée · prête pour le livreur', findingRider:'Recherche d’un livreur à proximité…',
  riderComing:'arrive pour récupérer le colis', enterPickup:'Code d’enlèvement du livreur', pickupHint:'Demandez au livreur son code à 4 chiffres et saisissez-le pour prouver la remise.', validate:'Valider',
  wrongCode:'Code incorrect, réessayez.', handed:'Colis remis au livreur', youGet:'Vous recevez', commission:'Commission Grendi', paidTo:'Versé sur', addListing:'Ajouter un article',
  photos:'Photos', photoHint:'Photos compressées automatiquement : 4,2 Mo → 180 Ko.', title:'Titre', category:'Catégorie', price:'Prix (FCFA)', qty:'Quantité', lotSize:'Pièces par lot', publish:'Publier',
  underReview:'En vérification', live:'En ligne', sold:'Vendu', reviewNote:'Les 5 premiers articles d’un vendeur sont vérifiés par l’équipe Grendi (moins de 2 h).', editPrice:'Modifier le prix', save:'Enregistrer',
  draftOffline:'Pas de réseau ? L’article est gardé en brouillon et publié dès le retour de la connexion.', inbox:'Messages', noChats:'Aucune conversation.', views:'vues',
  // rider
  online:'En ligne', offline:'Hors ligne', onlineS:'Vous recevez les courses autour de vous', todayEarn:'Gagné aujourd’hui', deliveries:'Livraisons', cashToRemit:'Espèces à reverser',
  newJob:'Nouvelle course', pickup:'Récupération', dropoff:'Livraison', fee:'Gain', acceptJob:'Accepter la course', noJobs:'Pas de course pour l’instant. Restez en ligne.',
  goSeller:'Allez chez le vendeur', showCode:'Montrez ce code au vendeur', waitSellerCode:'En attente : le vendeur saisit votre code.', goBuyer:'Livrez au client', collectCash:'Encaissez en espèces',
  enterDelivery:'Code de livraison du client', deliveryHint:'Le client vous donne son code après avoir vérifié l’article.', confirmDel:'Confirmer la livraison', noData:'Pas de données mobiles',
  smsFallback:'Sans internet ? Envoyez le code par SMS', sendSms:'Envoyer le SMS', smsTo:'Envoyer au 8080 :', refusedBtn:'Le client refuse l’article', refuseReason:'Raison du refus',
  rNot:'Pas conforme à l’annonce', rSize:'Mauvaise taille', rDamaged:'Article abîmé', confirmRefuse:'Confirmer le retour au vendeur', remit:'Reverser par MoMo', delivered:'Livré !', earned:'gagnés',
  // admin
  overview:'Vue d’ensemble', aOrders:'Commandes', aVerify:'Vérifications', aListings:'Articles', aPayments:'Paiements', aDisputes:'Litiges', aRiders:'Livreurs', aSettings:'Réglages',
  ordersToday:'Commandes aujourd’hui', gmv:'Ventes du jour', escrowHeld:'Argent bloqué', avgTime:'Délai moyen jusqu’à la porte', ridersOnline:'Livreurs en ligne', openDisputes:'Litiges ouverts',
  liveFeed:'Activité en direct', order:'Commande', buyerL:'Acheteur', sellerL:'Vendeur', amount:'Montant', time:'Heure', approve:'Approuver', reject:'Rejeter', approved:'Approuvé', rejected:'Rejeté',
  sellerApp:'Demande vendeur', riderApp:'Demande livreur', docs:'Documents', momoCheck:'Compte MoMo au même nom', checked:'vérifié', reviewListing:'Articles à vérifier', none:'Rien à traiter.',
  ledger:'Journal des paiements', held:'Bloqué', released:'Versé', refunded:'Remboursé', toSeller:'Au vendeur', toRider:'Au livreur', grendiCut:'Grendi',
  refundBuyer:'Rembourser l’acheteur', releaseSeller:'Payer le vendeur', resolved:'Résolu', dispute:'Litige', claim:'Réclamation', evidence:'Preuves',
  commissionPct:'Commission sur les ventes (%)', deliveryFees:'Frais de livraison par quartier (FCFA)', codOn:'Paiement à la livraison autorisé', codLimit:'Plafond d’espèces par livreur (FCFA)', confirmWin:'Délai de confirmation vendeur (heures)', settingsNote:'Les changements s’appliquent tout de suite dans les apps.',
  zoneL:'Zone', rating:'Note', state:'État', busy:'En course', loggedAs:'Connecté en tant que',
  minutes:'min', hAgo:'il y a', step:'Étape',
  liveTrack:'Suivi en direct', arrivesIn:'Arrive dans', arrived:'Arrivé', searching:'Recherche d’un livreur à proximité…', nearbyRiders:'livreurs à proximité',
  toSellerB:'récupère votre colis chez', toBuyerB:'est en route vers vous', toSellerS:'arrive à votre boutique', toSellerR:'Direction', toBuyerR:'Direction',
  arrivedSeller:'est arrivé à votre boutique. Demandez-lui son code.', arrivedBuyer:'est arrivé ! Vérifiez l’article, puis donnez votre code.', arrivedRiderS:'Vous êtes arrivé chez le vendeur. Montrez votre code.', arrivedRiderB:'Vous êtes arrivé chez le client. Demandez son code.',
  skip:'Avancer jusqu’à l’arrivée', lightMap:'Carte légère (moins de 15 Ko) : fonctionne même en 2G.', gpsLive:'GPS en direct', smsPos:'Sans données : position envoyée par SMS toutes les 2 min',
  liveMap:'Carte en direct', fleet:'Flotte en direct', idle:'Disponible', eta:'Arrivée', trackLink:'Suivi', shop:'Vendeur', you:'Vous'
},
en:{
  demo:'Demo', buyer:'Buyer', seller:'Seller', rider:'Rider', admin:'Admin', reset:'Reset demo',
  demoClock:'Demo time', guideTitle:'Guided demo', guideSub:'Follow one order from start to finish. Switch roles at the top: each role has its own login.',
  g1:'Pick an item, chat or make an offer, then pay', g2:'Accept the offer, confirm and pack the order', g3:'Accept the delivery job', g4:'Enter the rider’s pickup code', g5:'Get the delivery code by SMS', g6:'Enter the buyer’s code at the door', g7:'See the payout, verifications and settings',
  open:'Open', timeline:'Order timeline', noOrder:'No order yet. Start on the Buyer side.', total:'From payment to doorstep', legend:'What the demo shows',
  lg1:'Money held by Grendi until the delivery code', lg2:'Alerts also sent by SMS', lg3:'Durations are simulated to match a real day in Douala',
  welcome:'Cameroon’s clothing market, in your pocket.', welcomeS:'Buy and sell thrift and new clothes, delivered to your door.', sellerHero:'Sell your clothes across Douala.', riderHero:'Earn money delivering near you.',
  phone:'Phone number', getCode:'Get SMS code', enterCode:'Enter the code we sent by SMS', codeSent:'Code sent to', demoCode:'Demo code: 1234', verify:'Verify and continue', language:'Language',
  chooseAcct:'Choose a demo shop', individual:'Individual', wholesaler:'Wholesaler', noEmail:'No email needed: your number is enough.',
  adminLogin:'Grendi Ops console', adminSub:'For the Grendi team only.', email:'Email', password:'Password', signIn:'Sign in',
  hello:'Hello', searchPh:'Search dresses, jeans, sneakers…', all:'All', women:'Women', men:'Men', kids:'Kids', wholesale:'Wholesale', thrift:'Thrift', new:'New',
  bannerT:'Pay only when it’s delivered', bannerS:'Grendi holds your money until you give the rider your code.', near:'Near you', results:'items',
  home:'Home', orders:'Orders', chats:'Messages', profile:'Profile', sell:'Sell', listings:'Listings', earnings:'Earnings', jobs:'Jobs',
  size:'Size', condition:'Condition', negotiable:'Price negotiable', fixed:'Fixed price', verified:'Verified', sales:'sales', since:'On Grendi since',
  chat:'Chat', call:'Call', buy:'Buy', makeOffer:'Make an offer', agreed:'Agreed price', perPiece:'piece', lotOf:'Lot of', minOrder:'Minimum order',
  offerTitle:'Offer a price', offerHint:'The seller can accept, decline or counter.', sendOffer:'Send offer', yourOffer:'Your offer', offer:'Offer', counter:'Counter-offer',
  accept:'Accept', decline:'Decline', counterBtn:'Counter', accepted:'Accepted', declined:'Declined', pending:'Pending', buyAt:'Buy at',
  scam:'Warning: never pay outside Grendi. Your money is only protected inside the app.', typeMsg:'Write a message…',
  q1:'Is it still available?', q2:'Do you deliver to Bonamoussadi?', q3:'Any stains?', sq1:'Yes, available!', sq2:'Yes, delivery through Grendi.', sq3:'Very good condition, no stains.',
  calling:'Calling…', callNote:'Call through Grendi: your number stays hidden.', endCall:'End call', callDur:'Duration',
  checkout:'Checkout', deliverTo:'Deliver to', zone:'Neighbourhood', landmark:'Landmark', landmarkPh:'E.g. behind the pharmacy at the junction', payWith:'Pay with',
  momo:'MTN Mobile Money', om:'Orange Money', cod:'Cash on delivery', codNote:'Pay the rider in cash, then give them your code.', item:'Item', delivery:'Delivery', totalL:'Total',
  escrowNote:'Grendi holds your payment. The seller is paid only after you give your delivery code.', pay:'Pay', placeOrder:'Place order',
  confirmPay:'Confirm payment', enterPin:'Enter your PIN', pinHint:'Demo: tap any 4 digits', paySafe:'Payment secured', heldBy:'Amount held by Grendi',
  track:'Track order', myOrders:'My orders', noOrders:'No orders yet.', yourCode:'Your delivery code', codeHint:'Give this code to the rider only after checking the item.',
  riderOnWay:'Your rider', rateSeller:'Rate the seller', rateThanks:'Thanks! Your review helps everyone.', submit:'Submit', report:'Report a problem',
  dataSaver:'Data saver', dataSaverS:'Lighter images to save your data bundle', logout:'Log out', notifications:'Notifications', help:'Help and safety',
  smsFrom:'SMS from GRENDI', soldOut:'Sold', waitingSeller:'Waiting for seller', status:'Status',
  st_placed:'Order placed', st_confirmed:'Confirmed by seller', st_ready:'Ready for pickup', st_assigned:'Rider heading to seller', st_picked:'Out for delivery', st_completed:'Delivered · seller paid', st_cancelled:'Cancelled · refunded', st_refused:'Refused at door · refunded', st_disputed:'Dispute open',
  dash:'Dashboard', inEscrow:'Held by Grendi', paidOut:'Paid out this month', activeOrders:'Active orders', liveListings:'Live listings', newOrder:'New order',
  confirmOrder:'Confirm order', declineOrder:'Decline', timeLeft:'Time left to confirm', markReady:'Packed · ready for rider', findingRider:'Finding a rider nearby…',
  riderComing:'is coming to collect the parcel', enterPickup:'Rider’s pickup code', pickupHint:'Ask the rider for their 4-digit code and enter it to prove the handover.', validate:'Confirm',
  wrongCode:'Wrong code, try again.', handed:'Parcel handed to rider', youGet:'You receive', commission:'Grendi commission', paidTo:'Paid to', addListing:'Add a listing',
  photos:'Photos', photoHint:'Photos are compressed automatically: 4.2 MB → 180 KB.', title:'Title', category:'Category', price:'Price (FCFA)', qty:'Quantity', lotSize:'Pieces per lot', publish:'Publish',
  underReview:'Under review', live:'Live', sold:'Sold', reviewNote:'A seller’s first 5 listings are checked by the Grendi team (under 2 hours).', editPrice:'Edit price', save:'Save',
  draftOffline:'No signal? The listing is kept as a draft and published when you’re back online.', inbox:'Messages', noChats:'No conversations yet.', views:'views',
  online:'Online', offline:'Offline', onlineS:'You receive jobs near you', todayEarn:'Earned today', deliveries:'Deliveries', cashToRemit:'Cash to hand in',
  newJob:'New job', pickup:'Pickup', dropoff:'Drop-off', fee:'You earn', acceptJob:'Accept job', noJobs:'No jobs right now. Stay online.',
  goSeller:'Go to the seller', showCode:'Show this code to the seller', waitSellerCode:'Waiting for the seller to enter your code.', goBuyer:'Deliver to the buyer', collectCash:'Collect in cash',
  enterDelivery:'Buyer’s delivery code', deliveryHint:'The buyer gives you their code after checking the item.', confirmDel:'Confirm delivery', noData:'No mobile data',
  smsFallback:'No internet? Send the code by SMS', sendSms:'Send SMS', smsTo:'Send to 8080:', refusedBtn:'Buyer refuses the item', refuseReason:'Reason',
  rNot:'Not as described', rSize:'Wrong size', rDamaged:'Damaged item', confirmRefuse:'Confirm return to seller', remit:'Hand in via MoMo', delivered:'Delivered!', earned:'earned',
  overview:'Overview', aOrders:'Orders', aVerify:'Verification', aListings:'Listings', aPayments:'Payments', aDisputes:'Disputes', aRiders:'Riders', aSettings:'Settings',
  ordersToday:'Orders today', gmv:'Sales today', escrowHeld:'Money held', avgTime:'Average time to doorstep', ridersOnline:'Riders online', openDisputes:'Open disputes',
  liveFeed:'Live activity', order:'Order', buyerL:'Buyer', sellerL:'Seller', amount:'Amount', time:'Time', approve:'Approve', reject:'Reject', approved:'Approved', rejected:'Rejected',
  sellerApp:'Seller application', riderApp:'Rider application', docs:'Documents', momoCheck:'MoMo account in same name', checked:'checked', reviewListing:'Listings to review', none:'Nothing to handle.',
  ledger:'Payment ledger', held:'Held', released:'Paid out', refunded:'Refunded', toSeller:'To seller', toRider:'To rider', grendiCut:'Grendi',
  refundBuyer:'Refund buyer', releaseSeller:'Pay seller', resolved:'Resolved', dispute:'Dispute', claim:'Claim', evidence:'Evidence',
  commissionPct:'Commission on sales (%)', deliveryFees:'Delivery fees by neighbourhood (FCFA)', codOn:'Cash on delivery allowed', codLimit:'Cash limit per rider (FCFA)', confirmWin:'Seller confirmation window (hours)', settingsNote:'Changes apply in the apps straight away.',
  zoneL:'Zone', rating:'Rating', state:'State', busy:'On a job', loggedAs:'Signed in as',
  minutes:'min', hAgo:'ago', step:'Step',
  liveTrack:'Live tracking', arrivesIn:'Arrives in', arrived:'Arrived', searching:'Finding a rider nearby…', nearbyRiders:'riders nearby',
  toSellerB:'is collecting your parcel from', toBuyerB:'is on the way to you', toSellerS:'is coming to your shop', toSellerR:'Heading to', toBuyerR:'Heading to',
  arrivedSeller:'has arrived at your shop. Ask for his code.', arrivedBuyer:'has arrived! Check the item, then give your code.', arrivedRiderS:'You’ve arrived at the seller. Show your code.', arrivedRiderB:'You’ve arrived at the buyer. Ask for their code.',
  skip:'Skip to arrival', lightMap:'Light map (under 15 KB): works even on 2G.', gpsLive:'Live GPS', smsPos:'No data: position sent by SMS every 2 min',
  liveMap:'Live map', fleet:'Live fleet', idle:'Available', eta:'Arrival', trackLink:'Track', shop:'Seller', you:'You'
}};

/* ================= data ================= */
const U = id => q => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${q}&q=70`;
const SELLERS = {
  s1:{id:'s1', name:'Friperie Ngono', type:'individual', zone:'Akwa', phone:'6 99 41 22 07', rating:4.8, sales:312, since:'2025', color:'#B86A00', owner:'Marie Ngono'},
  s2:{id:'s2', name:'Couture Belle Wax', type:'individual', zone:'Bonapriso', phone:'6 77 90 15 33', rating:4.9, sales:128, since:'2026', color:'#6A45C9', owner:'Brenda Eyenga'},
  s3:{id:'s3', name:'Grossiste Bonabéri', type:'wholesaler', zone:'Bonabéri', phone:'6 55 08 71 49', rating:4.7, sales:86, since:'2025', color:'#2D5BD0', owner:'Alain Fotso'}
};
const BUYER = {name:'Aïcha Mbarga', phone:'6 70 12 34 56', zone:'Bonamoussadi'};
const RIDER = {name:'Junior Tchoua', phone:'6 94 55 18 02', rating:4.9, trips:214, bike:'Moto · LT 482 AB'};
const ZONES = ['Akwa','Bonapriso','Deïdo','Bonamoussadi','Makepe','Bonabéri','Logbaba','Ndokotti'];

const PRODUCTS = [
 {id:'p1', sid:'s2', cat:'women', kind:'new', img:'1784160053632-6eddd51bda26', price:12500, sizes:['S','M','L','XL'], cond:'new', neg:true,
  name:{fr:'Robe pagne wax, coupe évasée', en:'Wax print dress, flared cut'}, desc:{fr:'Cousue à Bonapriso dans un pagne wax 100 % coton. Doublée, fermeture au dos.', en:'Sewn in Bonapriso from 100% cotton wax print. Lined, zip at the back.'}},
 {id:'p2', sid:'s2', cat:'women', kind:'new', img:'1769349661389-0737f39a8507', price:18000, sizes:['M','L'], cond:'new', neg:true,
  name:{fr:'Ensemble wax assorti (2 pièces)', en:'Matching wax print set (2 pieces)'}, desc:{fr:'Haut et jupe en wax, parfait pour les cérémonies. Sur mesure possible sous 5 jours.', en:'Wax top and skirt, ideal for ceremonies. Made to measure in 5 days.'}},
 {id:'p3', sid:'s1', cat:'women', kind:'thrift', img:'1601653233006-5c9fd30eab12', price:6500, sizes:['M'], cond:'a', neg:true,
  name:{fr:'Robe longue imprimée, coupe asymétrique', en:'Long print dress, asymmetric cut'}, desc:{fr:'Seconde main, portée une fois pour un mariage.', en:'Second hand, worn once to a wedding.'}},
 {id:'p4', sid:'s1', cat:'women', kind:'thrift', img:'1520006403909-838d6b92c22e', price:5000, sizes:['S','M'], cond:'a', neg:true,
  name:{fr:'Robes fleuries friperie, plusieurs modèles', en:'Thrift floral dresses, several styles'}, desc:{fr:'Tissu fluide, idéal pour la chaleur de Douala. Choisissez le modèle dans le chat.', en:'Flowing fabric, ideal for Douala heat. Pick the style in the chat.'}},
 {id:'p5', sid:'s1', cat:'women', kind:'thrift', img:'1625646741211-711bdd65c570', price:4500, sizes:['L'], cond:'b', neg:true,
  name:{fr:'Haut rouge à motifs, épaules dénudées', en:'Red patterned off-shoulder top'}, desc:{fr:'Bon état, petite retouche à l’ourlet.', en:'Good condition, small hem repair.'}},
 {id:'p6', sid:'s2', cat:'women', kind:'new', img:'1760907949889-eb62b7fd9f75', price:9000, sizes:['S','M','L'], cond:'new', neg:false,
  name:{fr:'Robe bustier en pagne', en:'Strapless print dress'}, desc:{fr:'Nouvelle collection, plusieurs tailles en stock.', en:'New collection, several sizes in stock.'}},
 {id:'p7', sid:'s2', cat:'men', kind:'new', img:'1530884698386-d42ad3199b1f', price:22000, sizes:['M','L','XL'], cond:'new', neg:true,
  name:{fr:'Veste de costume fleurie homme', en:'Men’s floral suit jacket'}, desc:{fr:'Pour mariages et sorties. Coupe ajustée.', en:'For weddings and evenings out. Slim fit.'}},
 {id:'p8', sid:'s1', cat:'men', kind:'thrift', img:'1611312449408-fcece27cdbb7', price:7500, sizes:['L'], cond:'a', neg:true,
  name:{fr:'Veste en jean délavé', en:'Washed denim jacket'}, desc:{fr:'Friperie Grade A, boutons d’origine, aucune tache.', en:'Grade A thrift, original buttons, no stains.'}},
 {id:'p9', sid:'s1', cat:'men', kind:'thrift', img:'1608147152875-b0eb0c53d491', price:4000, sizes:['M','L'], cond:'a', neg:true,
  name:{fr:'Veste en jean clair avec badges', en:'Light denim jacket with patches'}, desc:{fr:'Friperie customisée, badges cousus à la main.', en:'Customised thrift, hand-sewn patches.'}},
 {id:'p10', sid:'s3', cat:'men', kind:'new', img:'1581655353564-df123a1eb820', price:2500, sizes:['M','L','XL','XXL'], cond:'new', neg:false,
  name:{fr:'T-shirt blanc 100 % coton', en:'White 100% cotton T-shirt'}, desc:{fr:'Vendu à l’unité ou en lot (voir le lot de 20).', en:'Sold singly or as a lot (see the lot of 20).'}},
 {id:'p11', sid:'s3', cat:'men', kind:'wholesale', img:'1562157873-818bc0726f68', price:30000, sizes:['Mix'], cond:'new', neg:true, lot:20,
  name:{fr:'Lot de 20 t-shirts couleurs assorties', en:'Lot of 20 assorted colour T-shirts'}, desc:{fr:'Pour revendeurs : tailles M à XL mélangées. Prix dégressif dès 3 lots.', en:'For resellers: mixed sizes M to XL. Volume discount from 3 lots.'}},
 {id:'p12', sid:'s1', cat:'men', kind:'thrift', img:'1525966222134-fcfa99b8ae77', price:6000, sizes:['42','43'], cond:'b', neg:true,
  name:{fr:'Baskets en toile bordeaux', en:'Burgundy canvas sneakers'}, desc:{fr:'Lavées, semelle en bon état.', en:'Washed, sole in good condition.'}},
 {id:'p13', sid:'s1', cat:'women', kind:'thrift', img:'1595950653106-6c9ebd614d3a', price:8000, sizes:['38','39'], cond:'a', neg:true,
  name:{fr:'Baskets pastel', en:'Pastel sneakers'}, desc:{fr:'Quasi neuves, portées 3 fois.', en:'Almost new, worn 3 times.'}},
 {id:'p14', sid:'s1', cat:'kids', kind:'thrift', img:'1759313560255-0458c8f4e615', price:3500, sizes:['4-6 ans'], cond:'a', neg:true,
  name:{fr:'Robe bleue fillette', en:'Girl’s blue dress'}, desc:{fr:'Pour 4 à 6 ans, très bon état.', en:'For ages 4 to 6, very good condition.'}},
 {id:'p15', sid:'s1', cat:'kids', kind:'thrift', img:'1519238263530-99bdd11df2ea', price:4000, sizes:['6-8 ans'], cond:'a', neg:true,
  name:{fr:'Tenue garçon décontractée', en:'Boy’s casual outfit'}, desc:{fr:'Haut et pantalon, 6 à 8 ans.', en:'Top and trousers, ages 6 to 8.'}},
 {id:'p16', sid:'s3', cat:'kids', kind:'wholesale', img:'1766918780914-5df4a5a98c44', price:25000, sizes:['0-24 mois'], cond:'a', neg:true, lot:25,
  name:{fr:'Lot de 25 vêtements bébé', en:'Lot of 25 baby clothes'}, desc:{fr:'Friperie bébé triée, 0 à 24 mois.', en:'Sorted baby thrift, 0 to 24 months.'}},
 {id:'p17', sid:'s3', cat:'women', kind:'wholesale', img:'1604072374690-0e7d7bddd54e', price:95000, sizes:['45 kg'], cond:'b', neg:true, lot:1,
  name:{fr:'Balle de friperie mixte 45 kg', en:'Mixed thrift bale, 45 kg'}, desc:{fr:'Balle importée d’Europe, jeans et chemises. Livraison en tricycle.', en:'Bale imported from Europe, jeans and shirts. Tricycle delivery.'}},
 {id:'p18', sid:'s1', cat:'women', kind:'thrift', img:'1540221652346-e5dd6b50f3e7', price:3000, sizes:['S','M','L'], cond:'b', neg:true,
  name:{fr:'Hauts friperie, au choix', en:'Thrift tops, your pick'}, desc:{fr:'Choisissez votre couleur dans le chat.', en:'Pick your colour in the chat.'}}
];
const SELL_PHOTOS = ['1540221652346-e5dd6b50f3e7','1582719188393-bb71ca45dbb9','1470309864661-68328b2cd0a5','1622290291468-a28f7a7dc6a8','1564584217132-2271feaeb3c5','1543076447-215ad9ba6923','1560506840-ec148e82a604','1604072374690-0e7d7bddd54e'];

const RANK = {placed:1, confirmed:2, ready:3, assigned:4, picked:5, completed:6, cancelled:0, refused:0, disputed:6};
const STEP_MIN = {confirmed:18, ready:24, assigned:4, picked:16, completed:31};

/* ================= state ================= */
const KEY = 'grendi-demo-v3';
const START = 9*60 + 5; // 09:05
function seed(){
  return {
    lang:'fr', role:'buyer', clock:START,
    sess:{buyer:null, seller:null, rider:null, admin:null},
    login:{buyer:{step:0}, seller:{step:0, acct:'s1'}, rider:{step:0}, admin:{}},
    nav:{buyer:{s:'home'}, seller:{s:'dash'}, rider:{s:'home'}, admin:{s:'overview'}},
    filt:{cat:'all', kind:'all', q:''},
    products: PRODUCTS.map(p=>({...p, status:'live', views: 40 + (p.price % 97)})),
    chats:{
      'p8|Paul E.':{pid:'p8', buyer:'Paul E.', msgs:[{from:'buyer', type:'text', text:'Bonjour, la veste est toujours dispo en L ?', t:START-42}]},
      'p11|Mama Kamga':{pid:'p11', buyer:'Mama Kamga', msgs:[{from:'buyer', type:'offer', amount:26000, status:'pending', t:START-25},{from:'buyer', type:'text', text:'Je prends 3 lots si vous faites 26 000.', t:START-24}]}
    },
    deals:{},
    orders:[
      mkSeed('GR-1036','p5','Clarisse T.','Deïdo',4500,800,'momo','disputed',START-260),
      mkSeed('GR-1037','p9','Paul E.','Makepe',4000,1000,'om','completed',START-230),
      mkSeed('GR-1038','p10','Serge M.','Logbaba',2500,1200,'cod','completed',START-190),
      mkSeed('GR-1039','p4','Nadège K.','Akwa',5000,700,'momo','completed',START-150),
      mkSeed('GR-1040','p6','Linda B.','Bonamoussadi',9000,1000,'momo','completed',START-95)
    ],
    seq:1041,
    apps:[
      {id:'a1', type:'seller', name:'Boutique Yaba Kids', owner:'Yaba Ndzié', zone:'Makepe', docs:['CNI recto','CNI verso','Selfie'], status:'pending', t:START-35},
      {id:'a2', type:'rider', name:'Eric Nana', owner:'Eric Nana', zone:'Deïdo', docs:['CNI','Permis A','Photo moto'], status:'pending', t:START-20}
    ],
    disputes:[{id:'d1', oid:'GR-1036', reason:'rNot', claim:{fr:'« La robe a une déchirure sous le bras, pas mentionnée dans l’annonce. »', en:'“The dress has a tear under the arm that wasn’t in the listing.”'}, status:'open'}],
    settings:{commission:10, cod:true, codLimit:50000, confirmH:12, fees:{Akwa:700, Bonapriso:800, 'Deïdo':800, Bonamoussadi:1000, Makepe:1000, 'Bonabéri':1500, Logbaba:1200, Ndokotti:1000}},
    rider:{online:true, earnedToday:4300, trips:5, cash:0, noData:false},
    dataSaver:false, notes:{buyer:0, seller:0, rider:0, admin:0}, rated:{}, likes:{}, adminSeen:false
  };
}
function mkSeed(id,pid,buyer,zone,price,fee,pay,status,t){
  const p = PRODUCTS.find(x=>x.id===pid);
  const ev=[{s:'placed',t}];
  if(status==='completed'||status==='disputed'){let tt=t;['confirmed','ready','assigned','picked','completed'].forEach(s=>{tt+=STEP_MIN[s];ev.push({s,t:tt});});}
  return {id, pid, sid:p.sid, buyer, zone, landmark:'', size:p.sizes[0], price, fee, pay, status, events:ev, pickup:'0000', code:'0000', demo:false, rider:RIDER.name};
}
let S;
try{ S = JSON.parse(localStorage.getItem(KEY)) || seed(); }catch(e){ S = seed(); }
if(!S.settings) S = seed();
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }

/* transient UI (not saved) */
const ui = {overlay:null, toast:null, call:null, pin:'', offerAmt:'', refuseR:'rNot', listing:null, adminFlash:null, err:null, input:{}};

/* ================= helpers ================= */
const t = k => (T[S.lang][k] ?? T.fr[k] ?? k);
const L = o => (o && typeof o==='object') ? (o[S.lang] || o.fr) : o;
const fcfa = n => Math.round(n).toLocaleString('fr-FR').replace(/ | /g,' ') + ' FCFA';
const hm = m => { m = ((Math.round(m)%1440)+1440)%1440; return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0'); };
const dur = m => { m=Math.round(m); const h=Math.floor(m/60), r=m%60; return h ? `${h} h ${String(r).padStart(2,'0')}` : `${r} ${t('minutes')}`; };
const esc = s => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const P = id => S.products.find(p=>p.id===id);
const O = id => S.orders.find(o=>o.id===id);
const img = (id, w=640) => U(id)(S.dataSaver ? Math.round(w/2.6) : w);
const code4 = () => String(1000 + Math.floor(Math.random()*9000));
const advance = m => { S.clock += m; };
const fee = zone => S.settings.fees[zone] ?? 1000;
const demoOrder = () => [...S.orders].reverse().find(o=>o.demo);
const initials = n => n.split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();
function notify(role, text, kind){ if(role===S.role) ui.toast = {text, kind}; else S.notes[role] = (S.notes[role]||0)+1; }
function setOrder(o, s){ o.status = s; o.events.push({s, t:S.clock}); }
function condL(c){ return c==='new' ? t('new') : c==='a' ? (S.lang==='fr'?'Friperie · Grade A, très bon état':'Thrift · Grade A, like new') : (S.lang==='fr'?'Friperie · Grade B, bon état':'Thrift · Grade B, good'); }
function kindChip(p){ return p.kind==='wholesale' ? `<span class="chip c-b">${t('wholesale')}</span>` : p.kind==='new' ? `<span class="chip c-v">${t('new')}</span>` : `<span class="chip c-a">${t('thrift')}</span>`; }

/* ================= icons ================= */
const I = {
  home:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  chat:'<path d="M4 5h16v11H8l-4 4z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  list:'<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
  coins:'<circle cx="9" cy="9" r="5"/><path d="M15 6a5 5 0 1 1-3 9"/>',
  bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-7h5l3 7M10 10l-2-3H5M15 10l1-3h3"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
  send:'<path d="M4 12l16-8-6 16-2-7z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  check:'<path d="M5 12l5 5L20 7"/>',
  star:'<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>',
  alert:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
  shirt:'<path d="M8 3l4 2 4-2 5 3-2 4-3-1v12H8V9L5 10 3 6z"/>',
  pin:'<path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  out:'<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>',
  wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01"/>',
  leaf:'<path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19l7-7"/>'
};
const ic = (n, cls='') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;
const icFill = n => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${I[n]}</svg>`;
const photo = (id, alt, w) => `<img src="${img(id,w)}" alt="${esc(alt)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="ph-fb" style="display:none"><div>${ic('shirt')}${esc(alt)}</div></div>`;

/* ================= shell ================= */
const app = document.getElementById('app');
const ROLE_C = {buyer:'var(--blue)', seller:'var(--amber)', rider:'var(--g2)', admin:'var(--vio)'};
function render(){
  document.documentElement.lang = S.lang;
  const keepScroll = document.querySelector('.body')?.scrollTop || 0;
  const sameScreen = render._last === screenKey();
  app.innerHTML = topbar() + `<div class="main">${guide()}<div class="stage">${stage()}</div></div>`;
  const b = document.querySelector('.body');
  if(b){ b.scrollTop = sameScreen ? keepScroll : 0; if(S.nav[S.role]?.s==='chat') b.scrollTop = b.scrollHeight; }
  render._last = screenKey();
  if(ui.toast){ const tt = ui.toast; setTimeout(()=>{ if(ui.toast===tt){ ui.toast=null; const el=document.querySelector('.toast'); el && el.remove(); } }, 4200); }
  const f = document.querySelector('[data-autofocus]'); f && f.focus({preventScroll:true});
}
const screenKey = () => S.role + ':' + JSON.stringify(S.nav[S.role]) + ':' + (S.sess[S.role]?1:0);

function topbar(){
  const rb = r => `<button data-a="role" data-v="${r}" aria-pressed="${S.role===r}"><span class="dot" style="background:${ROLE_C[r]}"></span>${t(r)}${S.notes[r] && S.role!==r ? `<span class="badge">${S.notes[r]}</span>`:''}</button>`;
  return `<header class="top"><div class="brand"><span class="logo">g</span>Grendi<small>${t('demo')}</small></div>
  <nav class="roles" aria-label="Roles">${['buyer','seller','rider','admin'].map(rb).join('')}</nav><span class="sp"></span>
  <span class="clock">${t('demoClock')} <b>${hm(S.clock)}</b></span>
  <div class="lang" role="group" aria-label="${t('language')}"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">FR</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">EN</button></div>
  <button class="ghost" data-a="reset">${t('reset')}</button></header>`;
}

function guide(){
  const o = demoOrder(); const r = o ? RANK[o.status] : 0;
  const done = [!!o, r>=3, r>=4, r>=5, r>=5, r>=6, r>=6 && S.adminSeen];
  const roleOf = ['buyer','seller','rider','seller','buyer','rider','admin'];
  const cur = done.indexOf(false);
  const steps = ['g1','g2','g3','g4','g5','g6','g7'].map((k,i)=>`<li class="${done[i]?'done':''} ${i===cur?'cur':''}"><span class="ck">${done[i]?'✓':i+1}</span><span class="tx"><b style="color:${ROLE_C[roleOf[i]]}">${t(roleOf[i])}</b>${t(k)}</span><button class="go" data-a="role" data-v="${roleOf[i]}">${t('open')}</button></li>`).join('');
  let tl = `<p class="sub">${t('noOrder')}</p>`;
  if(o){
    tl = `<ul class="tl">${o.events.map((e,i)=>`<li><span class="tm">${hm(e.t)}</span><span>${t('st_'+e.s)}</span><span class="du">${i?'+'+dur(e.t-o.events[i-1].t):''}</span></li>`).join('')}</ul>`;
    const last = o.events[o.events.length-1].t;
    tl += `<div class="total"><span class="sm">${t('total')}</span><b>${dur(last-o.events[0].t)}</b></div>`;
  }
  return `<aside class="guide">
   <div class="panel"><h3>${t('guideTitle')}</h3><p class="sub">${t('guideSub')}</p><ul class="steps">${steps}</ul></div>
   <div class="panel"><h3>${t('timeline')}${o?` · ${o.id}`:''}</h3>${tl}</div>
   <div class="panel"><h3>${t('legend')}</h3><div class="legend"><div>${ic('shield')}${t('lg1')}</div><div>${ic('chat')}${t('lg2')}</div><div>${ic('coins')}${t('lg3')}</div></div><button class="reset" data-a="reset">${t('reset')}</button><p class="credit">${S.lang==='fr'?'Données fictives pour la démo. Photos :':'Fictional demo data. Photos:'} <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a></p></div>
  </aside>`;
}

function stage(){
  if(S.role==='admin') return S.sess.admin ? adminApp() : adminLogin();
  return phone(S.sess[S.role] ? ({buyer:buyerApp, seller:sellerApp, rider:riderApp})[S.role]() : loginScreen(S.role));
}
function phone(inner){
  const off = S.role==='rider' && S.rider.noData;
  const toast = ui.toast ? `<div class="toast ${ui.toast.kind==='sms'?'sms':''}"><span class="ic">${ui.toast.kind==='sms'?'SMS':'g'}</span><div><b>${ui.toast.kind==='sms'?t('smsFrom'):'Grendi'}</b><br>${esc(ui.toast.text)}</div></div>` : '';
  return `<div class="phone"><div class="notch"></div><div class="screen">
   <div class="sbar ${off?'off':''}"><span>${hm(S.clock)}</span><span class="sig">${off?t('noData'):'4G'} <span class="bars"><i style="height:4px"></i><i style="height:6px"></i><i style="height:8px"></i><i style="height:11px"></i></span> 82%</span></div>
   ${inner}${toast}${ui.call?callOverlay():''}</div></div>`;
}

/* ================= login ================= */
function loginScreen(role){
  const st = S.login[role];
  const hero = {buyer:[t('welcome'),t('welcomeS')], seller:[t('sellerHero'), t('welcomeS')], rider:[t('riderHero'), t('onlineS')]}[role];
  const num = role==='buyer' ? BUYER.phone : role==='rider' ? RIDER.phone : SELLERS[st.acct].phone;
  const langSeg = `<div class="field"><label>${t('language')}</label><div class="seg"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">Français</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">English</button></div></div>`;
  let box;
  if(st.step===0){
    const acct = role==='seller' ? `<div class="field"><label>${t('chooseAcct')}</label><div class="acct">${Object.values(SELLERS).map(s=>`<button data-a="acct" data-v="${s.id}" aria-pressed="${st.acct===s.id}"><span class="av" style="background:${s.color}">${initials(s.name)}</span><span><b>${s.name}</b><br><span class="xs mut">${t(s.type)} · ${s.zone}</span></span></button>`).join('')}</div></div>` : '';
    box = `${langSeg}${acct}<div class="field"><label>${t('phone')}</label><div class="cc"><span class="pre">🇨🇲 +237</span><input class="inp" id="ph-${role}" value="${num}" inputmode="tel"></div><span class="xs mut">${t('noEmail')}</span></div>
      <button class="btn" data-a="login-next">${t('getCode')}</button>`;
  } else {
    box = `<div><h3>${t('enterCode')}</h3><p class="sm mut">${t('codeSent')} +237 ${num}</p></div>
      <div class="otp">${[1,2,3,4].map(n=>`<input id="otp-${role}-${n}" maxlength="1" inputmode="numeric" value="${n}">`).join('')}</div>
      <div class="note n-y">${ic('chat')}<span>${t('demoCode')}</span></div>
      <button class="btn" data-a="login-ok">${t('verify')}</button>`;
  }
  return `<div class="body"><div class="login"><div class="hero"><span class="logo">g</span><h1>${hero[0]}</h1><p>${hero[1]}</p><span class="chip c-y" style="justify-self:start">${t(role)}</span></div><div class="box">${box}</div></div></div>`;
}
function adminLogin(){
  return `<div class="alogin"><div class="brand" style="color:var(--ink)"><span class="logo">g</span>Grendi Ops</div><div><h2>${t('adminLogin')}</h2><p class="mut">${t('adminSub')}</p></div>
   <div class="field"><label>${t('email')}</label><input class="inp" id="ad-email" value="ops@grendi.cm"></div>
   <div class="field"><label>${t('password')}</label><input class="inp" id="ad-pw" type="password" value="demo2026"></div>
   <div class="note n-y">${ic('shield')}<span>ops@grendi.cm · demo2026</span></div>
   <button class="btn" data-a="admin-in">${t('signIn')}</button></div>`;
}

/* ================= buyer ================= */
function tabs(role, items){
  const cur = S.nav[role].s;
  return `<nav class="tabs">${items.map(([s,label,icon,nb])=>`<button data-a="nav" data-v="${s}" aria-current="${cur===s||(S.nav[role].tab===s)}">${ic(icon)}${label}${nb?`<span class="nb">${nb}</span>`:''}</button>`).join('')}</nav>`;
}
function buyerApp(){
  const n = S.nav.buyer; let body;
  if(n.s==='home') body = bHome();
  else if(n.s==='product') body = bProduct(n.id);
  else if(n.s==='chat') body = chatView('buyer', n.key);
  else if(n.s==='chats') body = chatList('buyer');
  else if(n.s==='checkout') body = bCheckout(n.id);
  else if(n.s==='orders') body = bOrders();
  else if(n.s==='order') body = bOrder(n.id);
  else body = profile('buyer');
  const myActive = S.orders.filter(o=>o.demo && RANK[o.status]>0 && RANK[o.status]<6).length;
  return body + overlay() + tabs('buyer',[['home',t('home'),'home'],['chats',t('chats'),'chat'],['orders',t('orders'),'bag',myActive],['profile',t('profile'),'user']]);
}
function bHome(){
  const f = S.filt;
  const list = S.products.filter(p=>p.status==='live' && (f.cat==='all'||p.cat===f.cat) && (f.kind==='all'||p.kind===f.kind) && (!f.q || (L(p.name)+' '+SELLERS[p.sid].name).toLowerCase().includes(f.q.toLowerCase())));
  const seg = (k, vals) => `<div class="seg">${vals.map(v=>`<button data-a="filt" data-k="${k}" data-v="${v}" aria-pressed="${f[k]===v}">${t(v)}</button>`).join('')}</div>`;
  return `<div class="body"><div class="ah" style="display:grid;gap:10px">
     <div class="row sb"><div><span class="xs mut">${t('hello')}, Aïcha 👋</span><h2 style="font-size:20px">Grendi</h2></div><span class="chip c-n">${ic('pin','')}${BUYER.zone}</span></div>
     <label class="search">${ic('search')}<input id="q" placeholder="${t('searchPh')}" value="${esc(f.q)}" data-a="q"></label></div>
   <div class="pad">
     <div class="banner"><b>${t('bannerT')}</b><span>${t('bannerS')}</span></div>
     ${seg('cat',['all','women','men','kids'])}
     ${seg('kind',['all','thrift','new','wholesale'])}
     <div class="row sb"><h3 style="font-size:16px">${t('near')}</h3><span class="xs mut">${list.length} ${t('results')}</span></div>
     <div class="grid2">${list.map(card).join('') || `<div class="empty" style="grid-column:1/-1">${ic('search')}${t('none')}</div>`}</div>
   </div></div>`;
}
function card(p){
  const s = SELLERS[p.sid]; const liked = S.likes[p.id];
  return `<button class="pc" data-a="open" data-v="${p.id}"><div class="ph">${photo(p.img, L(p.name), 420)}<span class="tagl">${kindChip(p)}</span><span class="heart" data-a="like" data-v="${p.id}" style="color:${liked?'var(--red)':'var(--ink)'}">${liked?icFill('heart'):ic('heart')}</span></div>
   <div class="meta"><span class="price">${fcfa(p.price)}</span><span class="nm">${esc(L(p.name))}</span><span class="loc">${s.zone} · ${p.sizes.join(', ')}</span></div></button>`;
}
function bProduct(id){
  const p = P(id); const s = SELLERS[p.sid]; const key = `${id}|Aïcha`;
  const deal = S.deals[key]; const sizeSel = ui.input.size || p.sizes[0];
  return `<div class="body"><div class="hero-img"><button class="ib float-back" data-a="back" aria-label="Back">${ic('back')}</button>${photo(p.img, L(p.name), 900)}</div>
   <div class="pad">
     <div class="row" style="flex-wrap:wrap">${kindChip(p)}<span class="chip c-n">${p.neg?t('negotiable'):t('fixed')}</span>${p.status!=='live'?`<span class="chip c-r">${t('soldOut')}</span>`:''}</div>
     <div><h2 style="font-size:21px">${esc(L(p.name))}</h2>
       <div class="row" style="margin-top:6px;align-items:baseline"><span class="price" style="font-size:24px${deal?';text-decoration:line-through;color:var(--mut);font-size:17px':''}">${fcfa(p.price)}</span>${deal?`<span class="price" style="font-size:24px;color:var(--g)">${fcfa(deal)}</span><span class="chip c-g">${t('agreed')}</span>`:''}</div>
       ${p.lot?`<p class="sm mut" style="margin-top:4px">${t('lotOf')} ${p.lot} · ${fcfa(p.price/p.lot)} / ${t('perPiece')}</p>`:''}</div>
     <div class="field"><label>${t('size')}</label><div class="sizes">${p.sizes.map(z=>`<button data-a="size" data-v="${esc(z)}" aria-pressed="${z===sizeSel}">${esc(z)}</button>`).join('')}</div></div>
     <div class="kv"><span>${t('condition')}</span><span class="b">${condL(p.cond)}</span></div>
     <p class="sm">${esc(L(p.desc))}</p>
     <div class="card"><div class="seller"><span class="av" style="background:${s.color}">${initials(s.name)}</span><div style="flex:1"><b>${s.name}</b><div class="xs mut">${t(s.type)} · ${s.zone} · ★ ${s.rating} · ${s.sales} ${t('sales')}</div></div><span class="chip c-g">${ic('shield')}${t('verified')}</span></div></div>
     <div class="note n-g">${ic('shield')}<span>${t('escrowNote')}</span></div>
   </div>
   <div class="stickybar"><button class="ib" data-a="call" data-v="${s.id}" aria-label="${t('call')}">${ic('phone')}</button><button class="btn sec sm" data-a="chat-open" data-v="${key}">${ic('chat')}${t('chat')}</button>
     ${p.status!=='live' ? `<button class="btn" disabled>${t('soldOut')}</button>` : deal ? `<button class="btn" data-a="checkout" data-v="${id}">${t('buyAt')} ${fcfa(deal)}</button>` : p.neg ? `<div class="btns" style="grid-template-columns:1fr 1fr"><button class="btn y sm" data-a="offer-open" data-v="${key}">${t('makeOffer')}</button><button class="btn sm" data-a="checkout" data-v="${id}">${t('buy')}</button></div>` : `<button class="btn" data-a="checkout" data-v="${id}">${t('buy')}</button>`}
   </div></div>`;
}
function bCheckout(id){
  const p = P(id); const deal = S.deals[`${id}|Aïcha`]; const price = deal || p.price;
  const z = ui.input.zone || BUYER.zone; const pay = ui.input.pay || 'momo'; const f = fee(z);
  const pm = (v, label, sw) => `<button class="li" data-a="pay" data-v="${v}" style="${pay===v?'border-color:var(--g);background:var(--g-soft)':''}"><span class="av" style="background:${sw};color:${v==='momo'?'#111':'#fff'};font-size:11px">${v==='momo'?'MTN':v==='om'?'OM':'FCFA'}</span><span class="mid"><span class="nm">${label}</span><span class="xs mut">${v==='cod'?t('codNote'):'+237 '+BUYER.phone}</span></span>${pay===v?ic('check'):''}</button>`;
  return `<div class="body"><div class="ah"><button class="ib" data-a="back">${ic('back')}</button><h2>${t('checkout')}</h2></div><div class="pad">
    <div class="li"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${SELLERS[p.sid].name} · ${t('size')} ${esc(ui.input.size||p.sizes[0])}</span></span><span class="b">${fcfa(price)}</span></div>
    <div class="card"><b>${t('deliverTo')}</b>
      <div class="field"><label>${t('zone')} · Douala</label><select class="inp" id="zone" data-a="zone">${ZONES.map(x=>`<option ${x===z?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>${t('landmark')}</label><input class="inp" id="landmark" placeholder="${t('landmarkPh')}" value="${esc(ui.input.landmark ?? (S.lang==='fr'?'Carrefour Bonamoussadi, derrière la pharmacie':'Bonamoussadi junction, behind the pharmacy'))}"></div>
      <div class="map" aria-hidden="true"><div class="pin" style="left:58%;top:38%;background:var(--g)"><b>●</b></div></div>
      <div class="kv"><span>${t('phone')}</span><span>+237 ${BUYER.phone}</span></div></div>
    <div class="field"><label>${t('payWith')}</label><div style="display:grid;gap:8px">${pm('momo',t('momo'),'var(--mtn)')}${pm('om',t('om'),'var(--orange)')}${S.settings.cod?pm('cod',t('cod'),'var(--ink)'):''}</div></div>
    <div class="card"><div class="kv"><span>${t('item')}</span><span>${fcfa(price)}</span></div><div class="kv"><span>${t('delivery')} (${z})</span><span>${fcfa(f)}</span></div><div class="divider"></div><div class="kv tot"><span>${t('totalL')}</span><span>${fcfa(price+f)}</span></div></div>
    <div class="note n-g">${ic('shield')}<span>${t('escrowNote')}</span></div>
    <button class="btn" data-a="pay-go" data-v="${id}">${pay==='cod'?t('placeOrder'):t('pay')+' '+fcfa(price+f)}</button>
  </div></div>`;
}
function bOrders(){
  const mine = S.orders.filter(o=>o.demo).slice().reverse();
  return `<div class="body"><div class="ah"><h2>${t('myOrders')}</h2></div><div class="pad">${mine.length? mine.map(o=>orderRow(o,'order')).join('') : `<div class="empty">${ic('bag')}${t('noOrders')}<button class="btn sm" data-a="nav" data-v="home">${t('home')}</button></div>`}</div></div>`;
}
function orderRow(o, screen, extra=''){
  const p = P(o.pid);
  const chip = RANK[o.status]===0 ? 'c-r' : o.status==='completed' ? 'c-g' : o.status==='disputed' ? 'c-r' : 'c-y';
  return `<button class="li" data-a="go" data-s="${screen}" data-v="${o.id}"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${o.id} · ${fcfa(o.price+o.fee)}${extra}</span><span><span class="chip ${chip}">${t('st_'+o.status)}</span></span></span></button>`;
}
const FLOW = ['placed','confirmed','ready','assigned','picked','completed'];
function trackList(o){
  const r = RANK[o.status]; const evt = s => o.events.find(e=>e.s===s);
  if(r===0) return `<ul class="track">${o.events.map(e=>`<li class="done"><span class="dt"></span><span class="lb">${t('st_'+e.s)}</span><span class="t">${hm(e.t)}</span></li>`).join('')}</ul>`;
  return `<ul class="track">${FLOW.map((s,i)=>{ const e=evt(s); const cls = e ? 'done' : (RANK[s]===r+1 ? 'now':''); return `<li class="${cls}"><span class="dt"></span><span class="lb">${t('st_'+s)}</span><span class="t">${e?hm(e.t):''}</span></li>`; }).join('')}</ul>`;
}
function bOrder(id){
  const o = O(id); const p = P(o.pid); const s = SELLERS[o.sid]; const r = RANK[o.status];
  let top = '';
  if(o.status==='picked'){
    top = `<div class="codebox"><b>${t('yourCode')}</b><div class="code">${o.code.split('').map(d=>`<span>${d}</span>`).join('')}</div><p class="xs">${t('codeHint')}</p>${o.pay==='cod'?`<div class="note n-y">${ic('coins')}<span>${t('collectCash')} : <b>${fcfa(o.price+o.fee)}</b></span></div>`:''}</div>`;
  }
  const rider = r>=4 && r<6 ? `<div class="card"><div class="seller"><span class="av" style="background:var(--g2)">${initials(RIDER.name)}</span><div style="flex:1"><span class="xs mut">${t('riderOnWay')}</span><br><b>${RIDER.name}</b> <span class="xs mut">★ ${RIDER.rating} · ${RIDER.bike}</span></div><button class="ib" data-a="call" data-v="rider">${ic('phone')}</button></div></div>` : '';
  const done = o.status==='completed';
  const rate = done && !S.rated[o.id] ? `<div class="card" style="text-align:center"><b>${t('rateSeller')} · ${s.name}</b><div class="stars">${[1,2,3,4,5].map(n=>`<button data-a="rate" data-v="${o.id}" data-n="${n}" aria-label="${n}" style="color:${n<=(ui.input.stars||0)?'var(--y)':'#d5dbd8'}">${icFill('star')}</button>`).join('')}</div><button class="btn sm" style="justify-self:center" data-a="rate-send" data-v="${o.id}" ${ui.input.stars?'':'disabled'}>${t('submit')}</button></div>` : done ? `<div class="note n-g">${ic('check')}<span>${t('rateThanks')}</span></div>` : '';
  return `<div class="body"><div class="ah"><button class="ib" data-a="nav" data-v="orders">${ic('back')}</button><h2>${o.id}</h2><span class="chip ${r===0?'c-r':done?'c-g':'c-y'}">${t('st_'+o.status)}</span></div><div class="pad">
    ${(r>=3 && r<=5) ? trackMap(o,'buyer') : ''}${top}${rider}
    <div class="card">${trackList(o)}</div>
    <div class="li"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${s.name} · ${t('size')} ${esc(o.size)}</span></span></div>
    <div class="card"><div class="kv"><span>${t('item')}</span><span>${fcfa(o.price)}</span></div><div class="kv"><span>${t('delivery')} (${o.zone})</span><span>${fcfa(o.fee)}</span></div><div class="kv tot"><span>${t('totalL')}</span><span>${fcfa(o.price+o.fee)}</span></div><div class="kv"><span>${t('payWith')}</span><span>${t(o.pay)}</span></div>
    ${o.pay!=='cod' && r>0 && r<6 ? `<div class="note n-g">${ic('shield')}<span>${t('heldBy')} : <b>${fcfa(o.price+o.fee)}</b></span></div>`:''}</div>
    ${rate}
    <button class="btn sec" data-a="chat-open" data-v="${o.pid}|Aïcha">${ic('chat')}${t('chat')} · ${s.name}</button>
  </div></div>`;
}

/* ================= chat ================= */
function chatList(role){
  const sid = S.sess.seller;
  const list = Object.entries(S.chats).filter(([k,c])=> role==='buyer' ? c.buyer==='Aïcha' : P(c.pid).sid===sid);
  return `<div class="body"><div class="ah"><h2>${t('inbox')}</h2></div><div class="pad">${list.length ? list.map(([k,c])=>{ const p=P(c.pid); const last=c.msgs[c.msgs.length-1]; const other = role==='buyer'?SELLERS[p.sid].name:c.buyer;
    const pend = c.msgs.some(m=>m.type==='offer'&&m.status==='pending'&&m.from!==role);
    return `<button class="li" data-a="chat-open" data-v="${k}"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(other)}</span><span class="xs mut" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${last? (last.type==='offer'? t('offer')+' '+fcfa(last.amount) : esc(last.text||'')) : esc(L(p.name))}</span></span>${pend?`<span class="chip c-y">${t('offer')}</span>`:`<span class="xs mut">${last?hm(last.t):''}</span>`}</button>`; }).join('') : `<div class="empty">${ic('chat')}${t('noChats')}</div>`}</div></div>`;
}
function chatView(role, key){
  if(!S.chats[key]){ const [pid,buyer] = key.split('|'); S.chats[key] = {pid, buyer, msgs:[]}; }
  const c = S.chats[key]; const p = P(c.pid); const s = SELLERS[p.sid];
  const other = role==='buyer' ? s.name : c.buyer;
  const risky = c.msgs.some(m=>m.type==='text' && /(\b6\s?\d{2}[\s.]?\d{2}[\s.]?\d{2}[\s.]?\d{2}\b)|momo|whatsapp|orange money|transfert|envoie/i.test(m.text||''));
  const msgs = c.msgs.map((m,i)=>{
    const mine = m.from===role;
    if(m.type==='sys') return `<div class="msg sys">${esc(L(m.text))}</div>`;
    if(m.type==='offer'){
      const lab = m.counter ? t('counter') : t('offer');
      let act = '';
      if(m.status==='pending' && !mine) act = `<div class="btns"><button class="btn sm" data-a="offer-acc" data-v="${key}" data-i="${i}">${t('accept')}</button><button class="btn sec sm" data-a="offer-dec" data-v="${key}" data-i="${i}">${t('decline')}</button></div>${role==='seller'?`<div class="row"><input class="inp" id="ctr-${i}" inputmode="numeric" placeholder="${fcfa(Math.round((m.amount+p.price)/2/500)*500)}" style="padding:8px 10px"><button class="btn sec sm" data-a="offer-ctr" data-v="${key}" data-i="${i}">${t('counterBtn')}</button></div>`:''}`;
      const stc = m.status==='accepted'?'c-g':m.status==='declined'?'c-r':'c-y';
      return `<div class="offer ${mine?'me':''}"><span class="xs mut">${lab} · ${esc(L(p.name))}</span><span class="amt">${fcfa(m.amount)}</span><span class="xs mut" style="text-decoration:line-through">${fcfa(p.price)}</span><span><span class="chip ${stc}">${t(m.status)}</span></span>${act}${m.status==='accepted'&&role==='buyer'?`<button class="btn sm" data-a="checkout" data-v="${p.id}">${t('buyAt')} ${fcfa(m.amount)}</button>`:''}</div>`;
    }
    return `<div class="msg ${mine?'me':'them'}">${esc(m.text)}<span class="tm">${hm(m.t)}</span></div>`;
  }).join('');
  const quick = role==='buyer' ? ['q1','q2','q3'] : ['sq1','sq2','sq3'];
  return `<div class="body" style="display:flex;flex-direction:column"><div class="ah"><button class="ib" data-a="back">${ic('back')}</button><span class="av" style="background:${role==='buyer'?s.color:'var(--blue)'};width:34px;height:34px">${initials(other)}</span><h2 style="font-size:16px">${esc(other)}<br><span class="xs mut" style="font-family:var(--body);font-weight:500">${esc(L(p.name))} · ${fcfa(p.price)}</span></h2><button class="ib" data-a="call" data-v="${role==='buyer'?s.id:'buyer'}" aria-label="${t('call')}">${ic('phone')}</button></div>
   <div class="msgs" style="flex:1">${risky?`<div class="note n-r">${ic('alert')}<span>${t('scam')}</span></div>`:''}<div class="msg sys">${t('scam')}</div>${msgs}</div>
   <div class="composer"><div class="quick">${role==='buyer'&&p.neg?`<button data-a="offer-open" data-v="${key}" style="background:var(--y-soft);border-color:var(--y)">${t('makeOffer')}</button>`:''}${quick.map(q=>`<button data-a="quick" data-v="${key}" data-q="${q}">${t(q)}</button>`).join('')}</div>
   <div class="cmp"><input id="msg" placeholder="${t('typeMsg')}" data-enter="send" data-v="${key}"><button class="send" data-a="send" data-v="${key}" aria-label="Send">${ic('send')}</button></div></div></div>`;
}
function callOverlay(){
  const c = ui.call;
  return `<div class="call"><div style="display:grid;gap:12px;justify-items:center"><span class="av" style="background:${c.color}">${initials(c.name)}</span><h2 style="font-size:24px">${esc(c.name)}</h2><span style="color:#9fb3aa">${t('calling')}</span><span class="xs" style="color:#9fb3aa;max-width:240px">${t('callNote')}</span></div><button class="end" data-a="end-call" aria-label="${t('endCall')}">${ic('phone')}</button></div>`;
}

/* ================= overlays ================= */
function overlay(){
  const o = ui.overlay; if(!o) return '';
  if(o.type==='offer'){
    const c = S.chats[o.key] || {pid:o.key.split('|')[0]}; const p = P(c.pid||o.key.split('|')[0]);
    const sug = [0.8,0.87,0.93].map(x=>Math.round(p.price*x/500)*500);
    return `<div class="ov" data-a="ov-close"><div class="sheet" data-stop><span class="grab"></span><h3>${t('offerTitle')}</h3><p class="sm mut">${esc(L(p.name))} · ${fcfa(p.price)}</p>
      <div class="cc"><input class="inp" id="offer-amt" inputmode="numeric" value="${esc(ui.offerAmt || sug[1])}" style="font:800 22px/1 var(--disp)" data-autofocus><span class="pre">FCFA</span></div>
      <div class="seg">${sug.map(v=>`<button data-a="offer-sug" data-v="${v}">${fcfa(v)}</button>`).join('')}</div>
      <p class="xs mut">${t('offerHint')}</p><button class="btn" data-a="offer-send" data-v="${o.key}">${t('sendOffer')}</button></div></div>`;
  }
  if(o.type==='momo'){
    const om = o.pay==='om';
    return `<div class="ov"><div class="sheet" data-stop><span class="grab"></span><div class="momo ${om?'om':'mtn'}"><b style="font-size:16px">${om?'Orange Money':'MTN MoMo'}</b><span class="sm">${t('confirmPay')} : <b>${fcfa(o.amount)}</b><br>→ GRENDI SARL</span><span class="xs">${t('enterPin')} · ${t('pinHint')}</span>
      <div class="pin">${[0,1,2,3].map(i=>`<i class="${ui.pin.length>i?'on':''}"></i>`).join('')}</div>
      <div class="keypad">${[1,2,3,4,5,6,7,8,9,'',0,'⌫'].map(k=>k===''?'<span></span>':`<button data-a="pin" data-v="${k}">${k}</button>`).join('')}</div></div>
      <button class="btn" data-a="pay-confirm" ${ui.pin.length<4?'disabled':''}>${t('confirmPay')}</button><button class="btn sec" data-a="ov-close">✕</button></div></div>`;
  }
  if(o.type==='paid'){
    return `<div class="ov"><div class="sheet" data-stop style="text-align:center;justify-items:center"><span class="av" style="background:var(--g);width:64px;height:64px">${ic('shield')}</span><h3>${t('paySafe')}</h3><p class="sm mut">${t('escrowNote')}</p><button class="btn" data-a="go" data-s="order" data-v="${o.oid}">${t('track')}</button></div></div>`;
  }
  if(o.type==='refuse'){
    return `<div class="ov" data-a="ov-close"><div class="sheet" data-stop><span class="grab"></span><h3>${t('refuseReason')}</h3>${['rNot','rSize','rDamaged'].map(r=>`<button class="li" data-a="refuse-r" data-v="${r}" style="${ui.refuseR===r?'border-color:var(--red);background:var(--red-soft)':''}">${t(r)}</button>`).join('')}<button class="btn red" data-a="refuse-go" data-v="${o.oid}">${t('confirmRefuse')}</button></div></div>`;
  }
  if(o.type==='sms'){
    const ord = O(o.oid);
    return `<div class="ov" data-a="ov-close"><div class="sheet" data-stop><span class="grab"></span><h3>${t('smsFallback')}</h3><p class="sm">${t('smsTo')}</p><div class="msg me" style="align-self:end;max-width:100%">GRD ${ord.id.replace('GR-','')} ${ui.input.smsCode || ''}</div><input class="inp" id="sms-code" inputmode="numeric" maxlength="4" placeholder="••••" value="${esc(ui.input.smsCode||'')}" data-autofocus><button class="btn" data-a="sms-go" data-v="${o.oid}">${t('sendSms')}</button></div></div>`;
  }
  if(o.type==='edit'){
    const p = P(o.pid);
    return `<div class="ov" data-a="ov-close"><div class="sheet" data-stop><span class="grab"></span><h3>${t('editPrice')}</h3><p class="sm mut">${esc(L(p.name))}</p><div class="cc"><input class="inp" id="edit-price" inputmode="numeric" value="${p.price}" style="font:800 22px/1 var(--disp)" data-autofocus><span class="pre">FCFA</span></div><button class="btn" data-a="edit-save" data-v="${p.id}">${t('save')}</button></div></div>`;
  }
  return '';
}

/* ================= profile ================= */
function profile(role){
  const who = role==='buyer' ? {n:BUYER.name, s:`+237 ${BUYER.phone} · ${BUYER.zone}`, c:'var(--blue)'} : role==='rider' ? {n:RIDER.name, s:`+237 ${RIDER.phone} · ★ ${RIDER.rating}`, c:'var(--g2)'} : (x=>({n:x.name, s:`${t(x.type)} · ${x.zone} · ★ ${x.rating}`, c:x.color}))(SELLERS[S.sess.seller]);
  return `<div class="body"><div class="ah"><h2>${t('profile')}</h2></div><div class="pad">
   <div class="card"><div class="seller"><span class="av" style="background:${who.c};width:52px;height:52px;font-size:18px">${initials(who.n)}</span><div style="flex:1"><b style="font-size:16px">${esc(who.n)}</b><div class="xs mut">${esc(who.s)}</div></div>${role!=='buyer'?`<span class="chip c-g">${ic('shield')}${t('verified')}</span>`:''}</div></div>
   <div class="card"><div class="row sb"><span class="row">${ic('globe')}<b>${t('language')}</b></span><div class="seg"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">Français</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">English</button></div></div></div>
   ${role==='buyer'?`<div class="toggle"><span><b>${t('dataSaver')}</b><br><span class="xs mut">${t('dataSaverS')}</span></span><button class="sw" data-a="saver" aria-pressed="${S.dataSaver}" aria-label="${t('dataSaver')}"></button></div>`:''}
   <div class="card"><div class="row">${ic('shield')}<b>${t('help')}</b></div><p class="sm mut">${t('scam')}</p></div>
   <button class="btn sec" data-a="logout">${ic('out')}${t('logout')}</button></div></div>`;
}

/* ================= seller ================= */
function sellerApp(){
  const n = S.nav.seller; let body;
  if(n.s==='dash') body = sDash();
  else if(n.s==='listings') body = sListings();
  else if(n.s==='add') body = sAdd();
  else if(n.s==='chats') body = chatList('seller');
  else if(n.s==='chat') body = chatView('seller', n.key);
  else if(n.s==='order') body = sOrder(n.id);
  else body = profile('seller');
  const sid = S.sess.seller;
  const pendOffers = Object.values(S.chats).filter(c=>P(c.pid).sid===sid && c.msgs.some(m=>m.type==='offer'&&m.status==='pending'&&m.from==='buyer')).length;
  return body + overlay() + tabs('seller',[['dash',t('dash'),'home'],['listings',t('listings'),'list'],['add',t('sell'),'plus'],['chats',t('chats'),'chat',pendOffers],['profile',t('profile'),'user']]);
}
function sellerMoney(sid){
  const c = S.settings.commission/100; let held=0, paid=148500;
  S.orders.filter(o=>o.sid===sid).forEach(o=>{ if(o.status==='completed') paid += o.price*(1-c); else if(RANK[o.status]>0 && o.pay!=='cod') held += o.price; });
  return {held, paid};
}
function sDash(){
  const sid = S.sess.seller; const s = SELLERS[sid]; const m = sellerMoney(sid);
  const mine = S.orders.filter(o=>o.sid===sid).slice().reverse();
  const active = mine.filter(o=>RANK[o.status]>0 && RANK[o.status]<6);
  const done = mine.filter(o=>!(RANK[o.status]>0 && RANK[o.status]<6)).slice(0,4);
  const dOrd = demoOrder(); const other = dOrd && dOrd.sid!==sid && RANK[dOrd.status]>0 && RANK[dOrd.status]<6 ? SELLERS[dOrd.sid] : null;
  const sw = other ? `<div class="note n-y">${ic('bell')}<span style="flex:1">${dOrd.id} → <b>${other.name}</b></span><button class="btn sm" data-a="switch-shop" data-v="${other.id}">${S.lang==='fr'?'Ouvrir cette boutique':'Open this shop'}</button></div>` : '';
  return `<div class="body"><div class="ah"><span class="av" style="background:${s.color};width:38px;height:38px">${initials(s.name)}</span><h2>${s.name}<br><span class="xs mut" style="font-family:var(--body);font-weight:500">${t(s.type)} · ${s.zone}</span></h2><span class="chip c-g">${ic('shield')}${t('verified')}</span></div><div class="pad">${sw}
    <div class="stats"><div class="stat"><span>${t('inEscrow')}</span><b>${fcfa(m.held)}</b></div><div class="stat"><span>${t('paidOut')}</span><b>${fcfa(m.paid)}</b></div><div class="stat"><span>${t('activeOrders')}</span><b>${active.length}</b></div><div class="stat"><span>${t('liveListings')}</span><b>${S.products.filter(p=>p.sid===sid&&p.status==='live').length}</b></div></div>
    <h3 style="font-size:16px">${t('activeOrders')}</h3>
    ${active.length? active.map(o=>orderRow(o,'order', o.status==='placed'?' · '+t('newOrder'):'')).join('') : `<div class="empty">${ic('bag')}${t('noOrders')}</div>`}
    ${done.length?`<h3 style="font-size:16px">${t('orders')}</h3>${done.map(o=>orderRow(o,'order')).join('')}`:''}
  </div></div>`;
}
function sOrder(id){
  const o = O(id); const p = P(o.pid); const c = S.settings.commission/100;
  let act = '';
  if(o.status==='placed'){
    const left = S.settings.confirmH*60 - (S.clock - o.events[0].t);
    act = `<div class="note n-y">${ic('bell')}<span>${t('timeLeft')} : <b>${dur(Math.max(0,left))}</b></span></div><div class="btns"><button class="btn red" data-a="s-decline" data-v="${id}">${t('declineOrder')}</button><button class="btn" data-a="s-confirm" data-v="${id}">${t('confirmOrder')}</button></div>`;
  } else if(o.status==='confirmed'){
    act = `<button class="btn" data-a="s-ready" data-v="${id}">${ic('bag')}${t('markReady')}</button>`;
  } else if(o.status==='ready'){
    act = trackMap(o,'seller');
  } else if(o.status==='assigned'){
    act = trackMap(o,'seller') + `<div class="card"><div class="seller"><span class="av" style="background:var(--g2)">${initials(RIDER.name)}</span><div style="flex:1"><b>${RIDER.name}</b> <span class="xs mut">${t('riderComing')}</span><div class="xs mut">${RIDER.bike}</div></div><button class="ib" data-a="call" data-v="rider">${ic('phone')}</button></div>
      <div class="field"><label>${t('enterPickup')}</label><input class="inp" id="pk-code" inputmode="numeric" maxlength="4" placeholder="••••" style="font:800 24px/1 var(--disp);letter-spacing:.3em;text-align:center"></div><p class="xs mut">${t('pickupHint')}</p>${ui.err?`<p class="xs" style="color:var(--red)">${t('wrongCode')}</p>`:''}<button class="btn" data-a="s-pickup" data-v="${id}">${t('validate')}</button></div>`;
  } else if(o.status==='picked'){
    act = `<div class="note n-g">${ic('check')}<span>${t('handed')}</span></div>` + trackMap(o,'seller');
  } else if(o.status==='completed'){
    act = `<div class="note n-g">${ic('coins')}<span>${t('paidTo')} MTN MoMo +237 ${SELLERS[o.sid].phone} : <b>${fcfa(o.price*(1-c))}</b></span></div>`;
  }
  return `<div class="body"><div class="ah"><button class="ib" data-a="nav" data-v="dash">${ic('back')}</button><h2>${o.id}</h2><span class="chip ${RANK[o.status]===0?'c-r':o.status==='completed'?'c-g':'c-y'}">${t('st_'+o.status)}</span></div><div class="pad">
    <div class="li"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${t('size')} ${esc(o.size)} · ${o.buyer} · ${o.zone}</span></span></div>
    ${act}
    <div class="card"><div class="kv"><span>${t('price')}</span><span>${fcfa(o.price)}</span></div><div class="kv"><span>${t('commission')} (${S.settings.commission}%)</span><span>− ${fcfa(o.price*c)}</span></div><div class="divider"></div><div class="kv tot"><span>${t('youGet')}</span><span>${fcfa(o.price*(1-c))}</span></div><div class="kv"><span>${t('payWith')}</span><span>${t(o.pay)}</span></div></div>
    <div class="card">${trackList(o)}</div>
  </div></div>`;
}
function sListings(){
  const sid = S.sess.seller; const mine = S.products.filter(p=>p.sid===sid);
  return `<div class="body"><div class="ah"><h2>${t('listings')}</h2><button class="btn sm" data-a="nav" data-v="add">${ic('plus')}${t('sell')}</button></div><div class="pad">
   ${mine.map(p=>`<div class="li"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="b">${fcfa(p.price)}</span><span class="xs mut">${p.views} ${t('views')} · ${p.sizes.join(', ')}</span></span><span style="display:grid;gap:6px;justify-items:end"><span class="chip ${p.status==='live'?'c-g':p.status==='pending'?'c-y':'c-n'}">${t(p.status==='live'?'live':p.status==='pending'?'underReview':'sold')}</span>${p.status!=='sold'?`<button class="btn sec sm" data-a="edit-open" data-v="${p.id}">${t('editPrice')}</button>`:''}</span></div>`).join('')}
  </div></div>`;
}
function sAdd(){
  const d = ui.listing || (ui.listing = {img:SELL_PHOTOS[0], cat:'women', kind: SELLERS[S.sess.seller].type==='wholesaler'?'wholesale':'thrift', cond:'a'});
  const wh = SELLERS[S.sess.seller].type==='wholesaler';
  const seg = (k, vals, lab) => `<div class="field"><label>${lab}</label><div class="seg">${vals.map(([v,l])=>`<button data-a="ls" data-k="${k}" data-v="${v}" aria-pressed="${d[k]===v}">${l}</button>`).join('')}</div></div>`;
  return `<div class="body"><div class="ah"><h2>${t('addListing')}</h2></div><div class="pad">
    <div class="field"><label>${t('photos')}</label><div class="pick">${SELL_PHOTOS.map(ph=>`<button data-a="ls" data-k="img" data-v="${ph}" aria-pressed="${d.img===ph}"><img src="${img(ph,200)}" alt="" onerror="this.style.opacity=0"></button>`).join('')}</div><span class="xs mut">${t('photoHint')}</span></div>
    <div class="field"><label>${t('title')}</label><input class="inp" id="l-title" value="${esc(ui.input.lt ?? (S.lang==='fr'?'Pull en maille, très bon état':'Knit sweater, very good condition'))}"></div>
    ${seg('cat',[['women',t('women')],['men',t('men')],['kids',t('kids')]],t('category'))}
    ${seg('kind',[['thrift',t('thrift')],['new',t('new')],['wholesale',t('wholesale')]],'Type')}
    ${seg('cond',[['new',t('new')],['a','Grade A'],['b','Grade B']],t('condition'))}
    <div class="grid2"><div class="field"><label>${t('price')}</label><input class="inp" id="l-price" inputmode="numeric" value="${esc(ui.input.lp ?? 5500)}"></div><div class="field"><label>${t('size')}</label><input class="inp" id="l-size" value="${esc(ui.input.lz ?? 'M, L')}"></div></div>
    ${wh||d.kind==='wholesale'?`<div class="field"><label>${t('lotSize')}</label><input class="inp" id="l-lot" inputmode="numeric" value="20"></div>`:''}
    <div class="toggle"><span><b>${t('negotiable')}</b></span><button class="sw" data-a="ls" data-k="neg" data-v="${d.neg===false?'1':'0'}" aria-pressed="${d.neg!==false}" aria-label="${t('negotiable')}"></button></div>
    <div class="note n-b">${ic('wifi')}<span>${t('draftOffline')}</span></div>
    <div class="note n-y">${ic('shield')}<span>${t('reviewNote')}</span></div>
    <button class="btn" data-a="publish">${t('publish')}</button></div></div>`;
}

/* ================= rider ================= */
function riderApp(){
  const n = S.nav.rider; let body;
  if(n.s==='home') body = rHome();
  else if(n.s==='job') body = rJob(n.id);
  else if(n.s==='earn') body = rEarn();
  else body = profile('rider');
  return body + overlay() + tabs('rider',[['home',t('jobs'),'bike'],['earn',t('earnings'),'coins'],['profile',t('profile'),'user']]);
}
function rHome(){
  const r = S.rider;
  const jobs = S.orders.filter(o=>o.status==='ready');
  const active = S.orders.filter(o=>o.demo && (o.status==='assigned'||o.status==='picked'));
  return `<div class="body"><div class="ah"><span class="av" style="background:var(--g2);width:38px;height:38px">${initials(RIDER.name)}</span><h2>${RIDER.name}<br><span class="xs mut" style="font-family:var(--body);font-weight:500">${RIDER.bike}</span></h2></div><div class="pad">
    <div class="toggle"><span><b>${r.online?t('online'):t('offline')}</b><br><span class="xs mut">${t('onlineS')}</span></span><button class="sw" data-a="online" aria-pressed="${r.online}" aria-label="${t('online')}"></button></div>
    <div class="stats"><div class="stat"><span>${t('todayEarn')}</span><b>${fcfa(r.earnedToday)}</b></div><div class="stat"><span>${t('cashToRemit')}</span><b style="${r.cash?'color:var(--amber)':''}">${fcfa(r.cash)}</b></div></div>
    ${active.map(o=>`<button class="li" data-a="go" data-s="job" data-v="${o.id}" style="border-color:var(--g)"><span class="av" style="background:var(--g)">${ic('bike')}</span><span class="mid"><span class="nm">${o.id} · ${t('st_'+o.status)}</span><span class="xs mut">${SELLERS[o.sid].zone} → ${o.zone}</span></span>${ic('back','')}</button>`).join('')}
    ${!r.online ? `<div class="empty">${ic('bike')}${t('offline')}</div>` : jobs.length ? jobs.map(o=>{ const s=SELLERS[o.sid]; return `<div class="job"><div class="row sb"><b style="font-size:16px">${t('newJob')}</b><span class="chip c-y">${fcfa(o.fee)}</span></div><div class="ring"><i></i></div>
      <div class="route"><i style="background:var(--y)"></i><span><span class="xs" style="color:#9fb3aa">${t('pickup')}</span><br><b>${s.name}</b> · ${s.zone}</span><span class="ln"></span><span></span><i style="background:var(--g2)"></i><span><span class="xs" style="color:#9fb3aa">${t('dropoff')}</span><br><b>${o.buyer}</b> · ${o.zone}</span></div>
      <div class="row sb sm"><span style="color:#9fb3aa">≈ 6,4 km · 22 ${t('minutes')}</span><span>${o.pay==='cod'?t('cod'):'MoMo ✓'}</span></div>
      <button class="btn y" data-a="r-accept" data-v="${o.id}">${t('acceptJob')}</button></div>`; }).join('') : !active.length ? `<div class="empty">${ic('bike')}${t('noJobs')}</div>` : ''}
  </div></div>`;
}
function rJob(id){
  const o = O(id); const s = SELLERS[o.sid];
  const atSeller = o.status==='assigned';
  const map = trackMap(o,'rider');
  let body;
  if(atSeller){
    body = `<div class="card"><span class="xs mut">${t('goSeller')}</span><div class="seller"><span class="av" style="background:${s.color}">${initials(s.name)}</span><div style="flex:1"><b>${s.name}</b><div class="xs mut">${s.zone} · Marché, ${S.lang==='fr'?'entrée principale':'main entrance'}</div></div><button class="ib" data-a="call" data-v="${s.id}">${ic('phone')}</button></div></div>
      <div class="codebox"><b>${t('showCode')}</b><div class="code">${o.pickup.split('').map(d=>`<span>${d}</span>`).join('')}</div><p class="xs">${t('waitSellerCode')}</p></div>`;
  } else if(o.status==='picked'){
    body = `<div class="card"><span class="xs mut">${t('goBuyer')}</span><div class="seller"><span class="av" style="background:var(--blue)">${initials(o.buyer)}</span><div style="flex:1"><b>${o.buyer}</b><div class="xs mut">${o.zone} · ${esc(o.landmark)}</div></div><button class="ib" data-a="call" data-v="buyer">${ic('phone')}</button></div></div>
      ${o.pay==='cod'?`<div class="note n-y">${ic('coins')}<span>${t('collectCash')} : <b>${fcfa(o.price+o.fee)}</b></span></div>`:`<div class="note n-g">${ic('shield')}<span>MoMo ✓ · ${t('heldBy')}</span></div>`}
      <div class="card"><div class="field"><label>${t('enterDelivery')}</label><input class="inp" id="dl-code" inputmode="numeric" maxlength="4" placeholder="••••" style="font:800 24px/1 var(--disp);letter-spacing:.3em;text-align:center" ${S.rider.noData?'disabled':''}></div><p class="xs mut">${t('deliveryHint')}</p>${ui.err?`<p class="xs" style="color:var(--red)">${t('wrongCode')}</p>`:''}
      ${S.rider.noData ? `<button class="btn y" data-a="sms-open" data-v="${id}">${ic('chat')}${t('smsFallback')}</button>` : `<button class="btn" data-a="r-deliver" data-v="${id}">${t('confirmDel')}</button>`}</div>
      <div class="toggle"><span><b>${t('noData')}</b><br><span class="xs mut">${t('smsFallback')}</span></span><button class="sw" data-a="nodata" aria-pressed="${S.rider.noData}" aria-label="${t('noData')}"></button></div>
      <button class="btn red" data-a="refuse-open" data-v="${id}">${t('refusedBtn')}</button>`;
  } else {
    const earned = o.status==='completed';
    body = `<div class="empty">${ic(earned?'check':'alert')}<h3>${earned?t('delivered'):t('st_'+o.status)}</h3>${earned?`<p><b>${fcfa(o.fee)}</b> ${t('earned')}</p>`:''}<button class="btn sm" data-a="nav" data-v="home">${t('jobs')}</button></div>`;
  }
  return `<div class="body"><div class="ah"><button class="ib" data-a="nav" data-v="home">${ic('back')}</button><h2>${o.id}</h2><span class="chip c-y">${fcfa(o.fee)}</span></div><div class="pad">${map}${body}</div></div>`;
}
function rEarn(){
  const r = S.rider; const mine = S.orders.filter(o=>o.status==='completed').slice().reverse();
  return `<div class="body"><div class="ah"><h2>${t('earnings')}</h2></div><div class="pad">
    <div class="stats"><div class="stat"><span>${t('todayEarn')}</span><b>${fcfa(r.earnedToday)}</b></div><div class="stat"><span>${t('deliveries')}</span><b>${r.trips}</b></div></div>
    ${r.cash?`<div class="card"><div class="kv tot"><span>${t('cashToRemit')}</span><span style="color:var(--amber)">${fcfa(r.cash)}</span></div><p class="xs mut">${t('codLimit')} : ${fcfa(S.settings.codLimit)}</p><button class="btn y" data-a="remit">${t('remit')}</button></div>`:''}
    ${mine.map(o=>`<div class="li"><span class="av" style="background:var(--g-soft);color:var(--g)">${ic('check')}</span><span class="mid"><span class="nm">${o.id} · ${SELLERS[o.sid].zone} → ${o.zone}</span><span class="xs mut">${hm(o.events[o.events.length-1].t)}</span></span><b>+${fcfa(o.fee)}</b></div>`).join('')}
  </div></div>`;
}

/* ================= admin ================= */
function adminApp(){
  const n = S.nav.admin.s;
  const pv = S.apps.filter(a=>a.status==='pending').length + S.products.filter(p=>p.status==='pending').length;
  const pd = S.disputes.filter(d=>d.status==='open').length;
  const nav = [['overview',t('overview')],['orders',t('aOrders')],['verify',t('aVerify'),pv],['payments',t('aPayments')],['disputes',t('aDisputes'),pd],['live',t('liveMap')],['riders',t('aRiders')],['settings',t('aSettings')]];
  const views = {overview:aOverview, orders:aOrders, verify:aVerify, payments:aPayments, disputes:aDisputes, live:aLive, riders:aRiders, settings:aSettings};
  return `<div class="admin"><nav class="anav"><div class="brand"><span class="logo">g</span>Grendi Ops</div>${nav.map(([k,l,c])=>`<button data-a="nav" data-v="${k}" aria-current="${n===k}">${l}${c?`<span class="cnt">${c}</span>`:''}</button>`).join('')}
    <div class="who"><span>${t('loggedAs')}</span><b style="color:#fff">ops@grendi.cm</b><div class="lang" style="justify-self:start"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">FR</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">EN</button></div><button class="ghost" data-a="logout" style="justify-self:start">${t('logout')}</button></div></nav>
    <div class="acont">${ui.adminFlash?`<div class="note n-g">${ic('check')}<span>${esc(ui.adminFlash)}</span></div>`:''}${views[n]()}</div></div>`;
}
function stChip(o){ const r=RANK[o.status]; return `<span class="chip ${r===0||o.status==='disputed'?'c-r':o.status==='completed'?'c-g':'c-y'}">${t('st_'+o.status)}</span>`; }
function aOverview(){
  const today = S.orders; const gmv = today.reduce((a,o)=>a+(RANK[o.status]>0?o.price:0),0);
  const held = today.filter(o=>RANK[o.status]>0&&RANK[o.status]<6&&o.pay!=='cod').reduce((a,o)=>a+o.price+o.fee,0);
  const fin = today.filter(o=>o.status==='completed'); const avg = fin.length ? fin.reduce((a,o)=>a+(o.events[o.events.length-1].t-o.events[0].t),0)/fin.length : 0;
  const feed = today.flatMap(o=>o.events.map(e=>({o,e}))).sort((a,b)=>b.e.t-a.e.t).slice(0,8);
  return `<h2>${t('overview')}</h2><div class="kpis">
    <div class="kpi"><span>${t('ordersToday')}</span><b>${today.length}</b></div><div class="kpi"><span>${t('gmv')}</span><b>${fcfa(gmv)}</b></div><div class="kpi"><span>${t('escrowHeld')}</span><b>${fcfa(held)}</b></div>
    <div class="kpi"><span>${t('avgTime')}</span><b>${dur(avg)}</b></div><div class="kpi"><span>${t('ridersOnline')}</span><b>${(S.rider.online?1:0)+6}</b></div><div class="kpi"><span>${t('openDisputes')}</span><b>${S.disputes.filter(d=>d.status==='open').length}</b></div></div>
    <h3>${t('liveFeed')}</h3><div class="tw"><table><thead><tr><th>${t('time')}</th><th>${t('order')}</th><th>${t('status')}</th><th>${t('sellerL')}</th><th class="num">${t('amount')}</th></tr></thead><tbody>
    ${feed.map(({o,e})=>`<tr><td>${hm(e.t)}</td><td><b>${o.id}</b>${o.demo?' <span class="chip c-b">demo</span>':''}</td><td>${t('st_'+e.s)}</td><td>${SELLERS[o.sid].name}</td><td class="num">${fcfa(o.price+o.fee)}</td></tr>`).join('')}</tbody></table></div>`;
}
function aOrders(){
  return `<h2>${t('aOrders')}</h2><div class="tw"><table><thead><tr><th>${t('order')}</th><th>${t('item')}</th><th>${t('buyerL')}</th><th>${t('sellerL')}</th><th>${t('payWith')}</th><th>${t('status')}</th><th class="num">${t('amount')}</th></tr></thead><tbody>
  ${S.orders.slice().reverse().map(o=>`<tr><td><b>${o.id}</b><br><span class="xs mut">${hm(o.events[0].t)}</span></td><td>${esc(L(P(o.pid).name))}</td><td>${esc(o.buyer)}<br><span class="xs mut">${o.zone}</span></td><td>${SELLERS[o.sid].name}</td><td>${t(o.pay)}</td><td>${stChip(o)}</td><td class="num">${fcfa(o.price+o.fee)}</td></tr>`).join('')}</tbody></table></div>`;
}
function aVerify(){
  const apps = S.apps.map(a=>`<div class="card"><div class="row sb"><span class="chip ${a.type==='seller'?'c-a':'c-g'}">${t(a.type==='seller'?'sellerApp':'riderApp')}</span><span class="xs mut">${hm(a.t)}</span></div><b style="font-size:16px">${esc(a.name)}</b><span class="sm mut">${esc(a.owner)} · ${a.zone}</span>
    <div class="field"><label>${t('docs')}</label><div class="docs">${a.docs.map(d=>`<span class="doc">${d}</span>`).join('')}</div></div><div class="kv"><span>${t('momoCheck')}</span><span class="b" style="color:var(--g)">✓ ${t('checked')}</span></div>
    ${a.status==='pending'?`<div class="btns"><button class="btn red sm" data-a="app" data-v="${a.id}" data-k="rejected">${t('reject')}</button><button class="btn sm" data-a="app" data-v="${a.id}" data-k="approved">${t('approve')}</button></div>`:`<span class="chip ${a.status==='approved'?'c-g':'c-r'}">${t(a.status)}</span>`}</div>`).join('');
  const pend = S.products.filter(p=>p.status==='pending');
  return `<h2>${t('aVerify')}</h2><div class="acards">${apps}</div><h3>${t('reviewListing')}</h3>${pend.length?`<div class="acards">${pend.map(p=>`<div class="card"><div class="li" style="border:0;padding:0"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${SELLERS[p.sid].name}</span><b>${fcfa(p.price)}</b></span></div><div class="btns"><button class="btn red sm" data-a="lst" data-v="${p.id}" data-k="rejected">${t('reject')}</button><button class="btn sm" data-a="lst" data-v="${p.id}" data-k="live">${t('approve')}</button></div></div>`).join('')}</div>`:`<p class="mut">${t('none')}</p>`}`;
}
function aPayments(){
  const c = S.settings.commission/100;
  const rows = S.orders.slice().reverse().map(o=>{ const r=RANK[o.status]; const state = o.status==='completed'?'released':r===0?'refunded':o.status==='disputed'?'held':'held';
    return `<tr><td><b>${o.id}</b></td><td>${t(o.pay)}</td><td class="num">${fcfa(o.price+o.fee)}</td><td><span class="chip ${state==='released'?'c-g':state==='refunded'?'c-r':'c-y'}">${t(state)}</span></td><td class="num">${o.status==='completed'?fcfa(o.price*(1-c)):'—'}</td><td class="num">${o.status==='completed'?fcfa(o.fee):'—'}</td><td class="num">${o.status==='completed'?fcfa(o.price*c):'—'}</td></tr>`; }).join('');
  return `<h2>${t('ledger')}</h2><div class="tw"><table><thead><tr><th>${t('order')}</th><th>${t('payWith')}</th><th class="num">${t('amount')}</th><th>${t('status')}</th><th class="num">${t('toSeller')}</th><th class="num">${t('toRider')}</th><th class="num">${t('grendiCut')}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function aDisputes(){
  return `<h2>${t('aDisputes')}</h2>${S.disputes.map(d=>{ const o=O(d.oid); const p=P(o.pid); return `<div class="card" style="max-width:640px"><div class="row sb"><b>${t('dispute')} · ${o.id}</b>${d.status==='open'?`<span class="chip c-r">${t('st_disputed')}</span>`:`<span class="chip c-g">${t('resolved')} · ${t(d.result)}</span>`}</div>
    <div class="li" style="border:0;padding:0"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${o.buyer} ↔ ${SELLERS[o.sid].name} · ${fcfa(o.price+o.fee)}</span></span></div>
    <div class="kv"><span>${t('claim')}</span><span>${t(d.reason)}</span></div><p class="sm" style="font-style:italic">${esc(L(d.claim))}</p><div class="field"><label>${t('evidence')}</label><div class="docs"><span class="doc">Photo 1</span><span class="doc">Photo 2</span><span class="doc">Chat</span><span class="doc">${S.lang==='fr'?'Annonce':'Listing'}</span></div></div>
    ${d.status==='open'?`<div class="btns"><button class="btn sec sm" data-a="disp" data-v="${d.id}" data-k="released">${t('releaseSeller')}</button><button class="btn sm" data-a="disp" data-v="${d.id}" data-k="refunded">${t('refundBuyer')}</button></div>`:''}</div>`; }).join('')}`;
}
function aRiders(){
  const busy = S.orders.some(o=>o.status==='assigned'||o.status==='picked');
  const rs = [[RIDER.name,'Akwa → Bonamoussadi',RIDER.rating,S.rider.online?(busy?'busy':'online'):'offline',S.rider.cash],['Didier Mbappé','Deïdo',4.8,'online',0],['Clovis Etoundi','Makepe',4.6,'online',7500],['Rodrigue Nkoulou','Bonabéri',4.9,'busy',0],['Hervé Kamdem','Logbaba',4.7,'online',0],['Patrick Ewane','Bonapriso',4.5,'offline',0],['Steve Abena','Ndokotti',4.8,'online',0]];
  return `<h2>${t('aRiders')}</h2><div class="tw"><table><thead><tr><th>${t('rider')}</th><th>${t('zoneL')}</th><th>${t('rating')}</th><th>${t('state')}</th><th class="num">${t('cashToRemit')}</th></tr></thead><tbody>${rs.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>★ ${r[2]}</td><td><span class="chip ${r[3]==='online'?'c-g':r[3]==='busy'?'c-y':'c-n'}">${t(r[3])}</span></td><td class="num">${fcfa(r[4])}</td></tr>`).join('')}</tbody></table></div>`;
}
function aSettings(){
  const s = S.settings;
  return `<h2>${t('aSettings')}</h2><p class="mut">${t('settingsNote')}</p><div class="card" style="max-width:640px">
    <div class="set"><b>${t('commissionPct')}</b><input class="inp" id="set-commission" inputmode="numeric" value="${s.commission}" data-a="set" data-k="commission"></div>
    <div class="set"><b>${t('confirmWin')}</b><input class="inp" id="set-confirmH" inputmode="numeric" value="${s.confirmH}" data-a="set" data-k="confirmH"></div>
    <div class="set"><b>${t('codOn')}</b><button class="sw" data-a="set-cod" aria-pressed="${s.cod}" aria-label="${t('codOn')}"></button></div>
    <div class="set"><b>${t('codLimit')}</b><input class="inp" id="set-codLimit" inputmode="numeric" value="${s.codLimit}" data-a="set" data-k="codLimit"></div></div>
    <h3>${t('deliveryFees')}</h3><div class="card" style="max-width:640px">${ZONES.map(z=>`<div class="set"><span>${z}</span><input class="inp" id="fee-${z}" inputmode="numeric" value="${s.fees[z]}" data-a="fee" data-k="${z}"></div>`).join('')}</div>`;
}

/* ================= live tracking ================= */
const NODES = {'Bonabéri':[42,72],'Pont':[98,100],'Akwa':[152,112],'Bonapriso':[126,170],'Deïdo':[176,58],'Bépanda':[232,84],'Makepe':[274,106],'Bonamoussadi':[306,40],'Ndokotti':[236,150],'Logbaba':[308,182]};
const EDGES = [['Bonabéri','Pont'],['Pont','Akwa'],['Akwa','Bonapriso'],['Akwa','Deïdo'],['Akwa','Ndokotti'],['Deïdo','Bépanda'],['Bépanda','Makepe'],['Bépanda','Ndokotti'],['Makepe','Bonamoussadi'],['Deïdo','Bonamoussadi'],['Ndokotti','Logbaba'],['Ndokotti','Makepe'],['Bonapriso','Ndokotti'],['Makepe','Logbaba']];
const KM_PX = 0.034;            // 1 map px ≈ 34 m
const TRIP = {toSeller:40000, toBuyer:55000}; // real ms the demo animation lasts
const dist2 = (a,b) => Math.hypot(NODES[a][0]-NODES[b][0], NODES[a][1]-NODES[b][1]);
function route(a,b){
  const d={}, prev={}, q=new Set(Object.keys(NODES)); Object.keys(NODES).forEach(n=>d[n]=Infinity); d[a]=0;
  while(q.size){ let u=null; q.forEach(n=>{ if(u===null||d[n]<d[u]) u=n; }); q.delete(u); if(u===b) break;
    EDGES.forEach(([x,y])=>{ const v = x===u?y : y===u?x : null; if(v && q.has(v)){ const nd=d[u]+dist2(u,v); if(nd<d[v]){ d[v]=nd; prev[v]=u; } } }); }
  const path=[b]; while(path[0]!==a && prev[path[0]]) path.unshift(prev[path[0]]); return path;
}
const segLens = names => names.slice(1).map((n,i)=>dist2(names[i],n));
function pointAt(names, f){
  const L = segLens(names); const tot = L.reduce((a,b)=>a+b,0)||1; let d = f*tot;
  for(let i=0;i<L.length;i++){ if(d<=L[i] || i===L.length-1){ const k = L[i]? Math.min(1,d/L[i]) : 1; const A=NODES[names[i]], B=NODES[names[i+1]]; return {x:A[0]+(B[0]-A[0])*k, y:A[1]+(B[1]-A[1])*k, seg:i, tot}; } d-=L[i]; }
  const Z=NODES[names[names.length-1]]; return {x:Z[0], y:Z[1], seg:names.length-2, tot};
}
const prog = o => o.trk ? Math.min(1, Math.max(0,(Date.now()-o.trk.t0)/o.trk.dur)) : 0;
function startTrip(o, phase){
  const sz = SELLERS[o.sid].zone;
  const from = phase==='toSeller' ? (['Bépanda','Ndokotti','Deïdo','Akwa'].find(z=>z!==sz && z!==o.zone && route(z,sz).length>2) || ['Bépanda','Ndokotti','Akwa'].find(z=>z!==sz && z!==o.zone)) : sz;
  const to = phase==='toSeller' ? sz : o.zone;
  o.trk = {phase, path: route(from,to), t0:Date.now(), dur:TRIP[phase], min: phase==='toSeller'?STEP_MIN.picked:STEP_MIN.completed, arrived:false};
}
const activeTrip = o => o.trk && ((o.status==='assigned' && o.trk.phase==='toSeller') || (o.status==='picked' && o.trk.phase==='toBuyer'));
const km = px => (px*KM_PX).toFixed(1).replace('.', S.lang==='fr'?',':'.') + ' km';
function baseMap(){
  const roads = EDGES.map(([a,b])=>`<line x1="${NODES[a][0]}" y1="${NODES[a][1]}" x2="${NODES[b][0]}" y2="${NODES[b][1]}"/>`).join('');
  const labels = Object.entries(NODES).filter(([n])=>n!=='Pont').map(([n,[x,y]])=>`<text x="${x}" y="${y-9}" text-anchor="middle">${n}</text>`).join('');
  return `<rect width="340" height="210" fill="var(--map-land)"/>
   <path d="M0 196 C 40 170, 70 140, 80 104 S 92 30, 118 0 L 96 0 C 72 30, 70 70, 62 100 S 30 160, 0 176 Z" fill="var(--map-water)"/>
   <text x="18" y="150" class="riv">Wouri</text>
   <rect x="196" y="112" width="26" height="18" rx="4" fill="var(--map-park)"/><rect x="268" y="138" width="22" height="16" rx="4" fill="var(--map-park)"/><rect x="150" y="128" width="20" height="14" rx="3" fill="var(--map-park)"/>
   <g class="rd-o">${roads}</g><g class="rd">${roads}</g><g class="lbl">${labels}</g>`;
}
const pinSvg = (x,y,color,label) => `<g transform="translate(${x},${y})"><path d="M0 0 C -9 -10,-9 -22,0 -22 C 9 -22,9 -10,0 0Z" fill="${color}" stroke="#fff" stroke-width="1.5"/><text y="-11" text-anchor="middle" class="pin-t">${label}</text></g>`;
const riderSvg = `<g class="rmk"><circle r="15" class="halo"/><circle r="10" fill="var(--g)" stroke="#fff" stroke-width="2.5"/><path d="M-5 2.5 a2.2 2.2 0 1 0 .1 0M5 2.5 a2.2 2.2 0 1 0 .1 0M-5 2.5 L-1.5 -3 H2.5 L5 2.5 M-1 -3 L0 -5.5" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></g>`;
function trackMap(o, who){
  // who: buyer | seller | rider
  const sz = SELLERS[o.sid].zone; const S0=NODES[sz], B0=NODES[o.zone];
  const pins = pinSvg(S0[0],S0[1],'var(--amber)','V') + pinSvg(B0[0],B0[1],'var(--blue)','C');
  if(o.status==='ready'){
    const ghosts=[[-34,-18],[30,-26],[22,30]].map(([dx,dy],i)=>`<g class="ghost g${i}" transform="translate(${S0[0]+dx},${S0[1]+dy})"><circle r="7" fill="var(--g2)" opacity=".85" stroke="#fff" stroke-width="2"/></g>`).join('');
    return `<div class="lmap"><svg viewBox="0 0 340 210" role="img" aria-label="${t('searching')}">${baseMap()}<circle cx="${S0[0]}" cy="${S0[1]}" r="40" class="radar"/>${ghosts}${pins}</svg>
      <div class="trk-bar"><div class="row"><span class="gps"></span><b>${t('searching')}</b></div><span class="xs mut">3 ${t('nearbyRiders')} · ${t('lightMap')}</span></div></div>`;
  }
  if(!activeTrip(o)) return '';
  const pts = o.trk.path.map(n=>NODES[n].join(',')).join(' ');
  const toSeller = o.trk.phase==='toSeller';
  const head = who==='rider' ? `${t(toSeller?'toSellerR':'toBuyerR')} <b data-next></b>` :
    who==='seller' ? `<b>${RIDER.name.split(' ')[0]}</b> ${toSeller? t('toSellerS') : t('toBuyerB').replace('vous', o.buyer).replace('you', o.buyer)}` :
    `<b>${RIDER.name.split(' ')[0]}</b> ${toSeller? t('toSellerB')+' '+SELLERS[o.sid].name : t('toBuyerB')}`;
  return `<div class="lmap" data-trk="${o.id}" data-who="${who}"><div class="trk-top"><span class="chip c-g"><span class="gps"></span>${t('gpsLive')}</span><span class="sm">${head}</span></div>
    <svg viewBox="0 0 340 210" role="img" aria-label="${t('liveTrack')}">${baseMap()}<polyline points="${pts}" class="rt"/><polyline points="${pts}" class="rt-done" data-done/>${pins}<g data-rider>${riderSvg}</g></svg>
    <div class="trk-bar"><div style="display:grid;gap:2px"><b class="eta" data-eta>…</b><span class="xs mut" data-dist></span></div>
      <div class="pbar"><i data-pbar></i></div><button class="btn sec sm" data-a="trk-skip" data-v="${o.id}">${t('skip')} ⏩</button></div>
    ${who==='rider' && S.rider.noData ? `<p class="xs mut" style="padding:0 12px 10px">${t('smsPos')}</p>` : ''}</div>`;
}
function updateMap(el){
  const o = O(el.dataset.trk); if(!o || !o.trk) return;
  const p = prog(o); const pos = pointAt(o.trk.path, p);
  const r = el.querySelector('[data-rider]'); r && r.setAttribute('transform', `translate(${pos.x.toFixed(1)},${pos.y.toFixed(1)})`);
  const done = el.querySelector('[data-done]');
  if(done){ const pts = o.trk.path.slice(0,pos.seg+1).map(n=>NODES[n].join(',')); pts.push(pos.x.toFixed(1)+','+pos.y.toFixed(1)); done.setAttribute('points', pts.join(' ')); }
  const eta = el.querySelector('[data-eta]'), d = el.querySelector('[data-dist]'), nx = el.querySelector('[data-next]'), pb = el.querySelector('[data-pbar]');
  const left = Math.max(1, Math.ceil(o.trk.min*(1-p)));
  if(eta) eta.textContent = p>=1 ? t('arrived')+' ✓' : `${t('arrivesIn')} ${left} ${t('minutes')} · ${t('eta')} ${hm(S.clock+left)}`;
  if(d) d.textContent = p>=1 ? (el.dataset.who==='rider' ? t(o.trk.phase==='toSeller'?'arrivedRiderS':'arrivedRiderB') : '') : km(pos.tot*(1-p));
  if(nx) nx.textContent = o.trk.path[Math.min(o.trk.path.length-1, pos.seg+1)];
  if(pb) pb.style.width = (p*100).toFixed(1)+'%';
  const sk = el.querySelector('[data-a="trk-skip"]'); if(sk) sk.hidden = p>=1;
}
const FLEET = [['Didier M.','Deïdo','Bonamoussadi',70],['Clovis E.','Makepe','Logbaba',62],['Rodrigue N.','Bonabéri','Akwa',80],['Hervé K.','Logbaba','Bonapriso',90],['Steve A.','Ndokotti','Deïdo',66],['Patrick E.','Bonapriso','Akwa',58]];
function fleetPos(i){ const [n,a,b,sec] = FLEET[i]; const path = route(a,b); const ph = ((Date.now()/1000 + i*17) % (sec*2)) / sec; return pointAt(path, ph<=1?ph:2-ph); }
function updateFleet(el){
  FLEET.forEach((f,i)=>{ const g = el.querySelector(`[data-f="${i}"]`); if(g){ const p=fleetPos(i); g.setAttribute('transform',`translate(${p.x.toFixed(1)},${p.y.toFixed(1)})`); } });
  const o = S.orders.find(x=>x.demo && activeTrip(x)); const g = el.querySelector('[data-f="me"]');
  if(g){ const p = o ? pointAt(o.trk.path, prog(o)) : {x:NODES.Akwa[0]+10, y:NODES.Akwa[1]+6}; g.setAttribute('transform',`translate(${p.x.toFixed(1)},${p.y.toFixed(1)})`); }
}
function aLive(){
  const o = S.orders.find(x=>x.demo && activeTrip(x));
  const dots = FLEET.map((f,i)=>`<g data-f="${i}"><circle r="6" fill="#7d9188" stroke="#fff" stroke-width="2"/><text y="-9" text-anchor="middle" class="fl-t">${f[0]}</text></g>`).join('');
  const route0 = o ? `<polyline points="${o.trk.path.map(n=>NODES[n].join(',')).join(' ')}" class="rt"/>` : '';
  const rows = [[RIDER.name, o ? `${o.id} · ${t('st_'+o.status)}` : t('idle'), o ? `<span data-trk-eta="${o.id}"></span>` : '—']].concat(FLEET.map((f,i)=>[f[0], `${f[1]} → ${f[2]}`, i%3===0?t('idle'):t('busy')]));
  return `<h2>${t('liveMap')}</h2><p class="mut">${t('lightMap')}</p>
   <div class="lmap big" data-fleet>${o?`<div style="display:none" data-trk="${o.id}" data-who="admin"></div>`:''}<svg viewBox="0 0 340 210">${baseMap()}${route0}${o?pinSvg(NODES[SELLERS[o.sid].zone][0],NODES[SELLERS[o.sid].zone][1],'var(--amber)','V')+pinSvg(NODES[o.zone][0],NODES[o.zone][1],'var(--blue)','C'):''}${dots}<g data-f="me">${riderSvg}<text y="-16" text-anchor="middle" class="fl-t me">${RIDER.name.split(' ')[0]}</text></g></svg></div>
   <div class="tw"><table><thead><tr><th>${t('rider')}</th><th>${t('state')}</th><th>${t('eta')}</th></tr></thead><tbody>${rows.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div>`;
}
function arrivalNotify(o){
  const r = RIDER.name.split(' ')[0];
  if(o.trk.phase==='toSeller'){ notify('seller', `${r} ${t('arrivedSeller')}`); notify('rider', t('arrivedRiderS')); }
  else { notify('buyer', `${r} ${t('arrivedBuyer')}`, 'sms'); notify('rider', t('arrivedRiderB')); }
}
function tick(){
  let changed = false;
  S.orders.forEach(o=>{ if(activeTrip(o) && !o.trk.arrived && prog(o)>=1){ o.trk.arrived = true; changed = true; arrivalNotify(o); } });
  if(changed){ save(); const ae = document.activeElement; if(ae && (ae.tagName==='INPUT'||ae.tagName==='TEXTAREA')){ const top=document.querySelector('.top'); if(top) top.outerHTML = topbar(); } else render(); }
  document.querySelectorAll('[data-trk]').forEach(updateMap);
  document.querySelectorAll('[data-fleet]').forEach(updateFleet);
  document.querySelectorAll('[data-trk-eta]').forEach(el=>{ const o=O(el.dataset.trkEta); if(o&&o.trk){ const p=prog(o); el.textContent = p>=1? t('arrived') : `${Math.max(1,Math.ceil(o.trk.min*(1-p)))} ${t('minutes')}`; } });
}
setInterval(tick, 250);

/* ================= actions ================= */
const num = v => parseInt(String(v).replace(/\D/g,''),10) || 0;
function go(role, screen){ S.nav[role] = screen; }
function addMsg(key, from, m){ S.chats[key].msgs.push({from, t:S.clock, ...m}); }
function act(a, el){
  const v = el.dataset.v; const role = S.role; ui.err = null;
  switch(a){
  case 'role': S.role = v; S.notes[v] = 0; ui.overlay=null; ui.call=null; ui.toast=null; if(v==='admin' && S.sess.admin) S.adminSeen = true; break;
  case 'lang': S.lang = v; break;
  case 'reset': { const lang=S.lang; S = seed(); S.lang = lang; Object.assign(ui,{overlay:null,toast:null,call:null,listing:null,input:{},adminFlash:null}); break; }
  case 'acct': S.login.seller.acct = v; break;
  case 'login-next': S.login[role].step = 1; break;
  case 'login-ok': S.sess[role] = role==='seller' ? S.login.seller.acct : true; S.login[role].step = 0; ui.toast = {text: S.lang==='fr'?'Connexion réussie.':'Signed in.'}; break;
  case 'admin-in': S.sess.admin = true; S.adminSeen = !!demoOrder() && RANK[demoOrder().status]>=6; break;
  case 'logout': S.sess[role] = null; S.nav[role] = {s: role==='admin'?'overview':role==='seller'?'dash':'home'}; break;
  case 'nav': go(role, {s:v}); ui.listing = role==='seller'&&v==='add' ? ui.listing : ui.listing; if(role==='admin'){ ui.adminFlash=null; } break;
  case 'go': go(role, {s:el.dataset.s, id:v}); ui.overlay=null; break;
  case 'back': { const n=S.nav[role]; if(n.s==='checkout') go(role,{s:'product',id:n.id}); else if(n.s==='chat') go(role, n.from || {s:'chats'}); else go(role,{s: role==='buyer'?'home':'dash'}); break; }
  case 'filt': S.filt[el.dataset.k] = v; break;
  case 'open': go('buyer',{s:'product', id:v}); ui.input = {}; break;
  case 'like': S.likes[v] = !S.likes[v]; break;
  case 'size': ui.input.size = v; break;
  case 'saver': S.dataSaver = !S.dataSaver; break;
  case 'chat-open': { const from = {...S.nav[role]}; go(role,{s:'chat', key:v, from}); break; }
  case 'call': { const who = v==='rider'?{name:RIDER.name,color:'var(--g2)'}:v==='buyer'?{name:(S.nav[role].key? S.chats[S.nav[role].key]?.buyer : null) || BUYER.name,color:'var(--blue)'}:{name:SELLERS[v].name,color:SELLERS[v].color}; ui.call = who; break; }
  case 'end-call': ui.call = null; break;
  case 'quick': addMsg(v, role, {type:'text', text:t(el.dataset.q)}); autoReply(v, role); break;
  case 'send': { const inp = document.getElementById('msg'); const tx = inp && inp.value.trim(); if(!tx) return; addMsg(v, role, {type:'text', text:tx}); autoReply(v, role); break; }
  case 'offer-open': ui.overlay = {type:'offer', key:v}; ui.offerAmt=''; break;
  case 'offer-sug': ui.offerAmt = v; break;
  case 'offer-send': { const amt = num(document.getElementById('offer-amt').value); if(!amt) return; if(!S.chats[v]){ const [pid,buyer]=v.split('|'); S.chats[v]={pid,buyer,msgs:[]}; } addMsg(v,'buyer',{type:'offer', amount:amt, status:'pending'}); ui.overlay=null; advance(1);
    notify('seller', (S.lang==='fr'?'Nouvelle offre : ':'New offer: ')+fcfa(amt)); go('buyer',{s:'chat', key:v, from:S.nav.buyer.s==='chat'?S.nav.buyer.from:{...S.nav.buyer}}); break; }
  case 'offer-acc': case 'offer-dec': { const m = S.chats[v].msgs[+el.dataset.i]; m.status = a==='offer-acc'?'accepted':'declined'; advance(4);
    if(a==='offer-acc'){ S.deals[v] = m.amount; addMsg(v,'sys',{type:'sys', text:{fr:`Prix convenu : ${fcfa(m.amount)}. L’acheteur peut payer.`, en:`Agreed price: ${fcfa(m.amount)}. The buyer can now pay.`}}); }
    const other = role==='seller'?'buyer':'seller'; notify(other, (a==='offer-acc'?(S.lang==='fr'?'Offre acceptée : ':'Offer accepted: '):(S.lang==='fr'?'Offre refusée : ':'Offer declined: '))+fcfa(m.amount)); break; }
  case 'offer-ctr': { const m = S.chats[v].msgs[+el.dataset.i]; const amt = num(document.getElementById('ctr-'+el.dataset.i).value) || Math.round((m.amount+P(S.chats[v].pid).price)/2/500)*500; m.status='declined'; addMsg(v,'seller',{type:'offer', amount:amt, status:'pending', counter:true}); advance(3); notify('buyer',(S.lang==='fr'?'Contre-offre : ':'Counter-offer: ')+fcfa(amt)); break; }
  case 'checkout': go('buyer',{s:'checkout', id:v}); break;
  case 'zone': return;
  case 'pay': ui.input.pay = v; break;
  case 'pay-go': { const lm = document.getElementById('landmark'); ui.input.landmark = lm.value; ui.input.zone = document.getElementById('zone').value; const pay = ui.input.pay||'momo';
    if(pay==='cod'){ placeOrder(v); } else { const p=P(v); const price = S.deals[`${v}|Aïcha`]||p.price; ui.pin=''; ui.overlay = {type:'momo', pay, amount:price+fee(ui.input.zone), pid:v}; } break; }
  case 'pin': if(v==='⌫') ui.pin = ui.pin.slice(0,-1); else if(ui.pin.length<4) ui.pin += v; break;
  case 'pay-confirm': placeOrder(ui.overlay.pid); break;
  case 'ov-close': if(el.dataset.stop!==undefined) return; ui.overlay = null; break;
  case 'rate': ui.input.stars = +el.dataset.n; break;
  case 'rate-send': S.rated[v] = ui.input.stars; ui.input.stars = 0; notify('seller', (S.lang==='fr'?'Nouvel avis : ':'New review: ')+'★'.repeat(S.rated[v])); break;
  // seller
  case 's-confirm': { const o=O(v); advance(STEP_MIN.confirmed); setOrder(o,'confirmed'); notify('buyer', (S.lang==='fr'?`${SELLERS[o.sid].name} a confirmé votre commande ${o.id}.`:`${SELLERS[o.sid].name} confirmed your order ${o.id}.`), 'sms'); break; }
  case 's-decline': { const o=O(v); advance(10); setOrder(o,'cancelled'); P(o.pid).status='live'; notify('buyer', S.lang==='fr'?`Commande ${o.id} annulée. ${fcfa(o.price+o.fee)} remboursés sur votre compte.`:`Order ${o.id} cancelled. ${fcfa(o.price+o.fee)} refunded to your account.`, 'sms'); break; }
  case 's-ready': { const o=O(v); advance(STEP_MIN.ready); setOrder(o,'ready'); notify('rider', (S.lang==='fr'?'Nouvelle course : ':'New job: ')+`${SELLERS[o.sid].zone} → ${o.zone} · ${fcfa(o.fee)}`); break; }
  case 's-pickup': { const o=O(v); const c = document.getElementById('pk-code').value.trim(); if(c!==o.pickup){ ui.err=true; break; } advance(STEP_MIN.picked); setOrder(o,'picked'); startTrip(o,'toBuyer');
    notify('buyer', S.lang==='fr'?`Votre colis ${o.id} est en route. Code de livraison : ${o.code}. Ne le donnez qu’après avoir vérifié l’article. Suivi : grendi.cm/t/${o.id.replace('GR-','')}`:`Your parcel ${o.id} is on its way. Delivery code: ${o.code}. Only give it after checking the item. Track: grendi.cm/t/${o.id.replace('GR-','')}`, 'sms'); notify('rider', S.lang==='fr'?'Colis récupéré. Direction le client.':'Parcel collected. Head to the buyer.'); break; }
  case 'edit-open': ui.overlay = {type:'edit', pid:v}; break;
  case 'edit-save': { const p=P(v); const np = num(document.getElementById('edit-price').value); if(np) p.price = np; ui.overlay=null; ui.toast={text:(S.lang==='fr'?'Prix mis à jour : ':'Price updated: ')+fcfa(p.price)}; break; }
  case 'ls': { const d = ui.listing; captureListing(); if(el.dataset.k==='neg') d.neg = !(d.neg!==false); else d[el.dataset.k] = v; break; }
  case 'publish': { captureListing(); const d = ui.listing; const id = 'p'+(100+S.products.length); const sizes = (ui.input.lz||'M').split(',').map(x=>x.trim()).filter(Boolean);
    const title = ui.input.lt || 'Article';
    S.products.unshift({id, sid:S.sess.seller, cat:d.cat, kind:d.kind, img:d.img, price:num(ui.input.lp)||5000, sizes, cond:d.cond, neg:d.neg!==false, lot: d.kind==='wholesale'? (num(document.getElementById('l-lot')?.value)||20):undefined, name:{fr:title,en:title}, desc:{fr:'Nouvel article publié pendant la démo.',en:'New listing added during the demo.'}, status:'pending', views:0});
    ui.listing=null; ui.input={}; advance(2); notify('admin', (S.lang==='fr'?'Article à vérifier : ':'Listing to review: ')+title); go('seller',{s:'listings'}); ui.toast={text:t('underReview')+' · '+t('reviewNote')}; break; }
  // rider
  case 'online': S.rider.online = !S.rider.online; break;
  case 'nodata': S.rider.noData = !S.rider.noData; break;
  case 'r-accept': { const o=O(v); advance(STEP_MIN.assigned); setOrder(o,'assigned'); o.rider = RIDER.name; startTrip(o,'toSeller'); go('rider',{s:'job', id:v}); notify('seller', S.lang==='fr'?`${RIDER.name} arrive pour ${o.id}. Demandez-lui son code.`:`${RIDER.name} is coming for ${o.id}. Ask for his code.`); notify('buyer', S.lang==='fr'?`Livreur trouvé pour ${o.id} : ${RIDER.name}.`:`Rider found for ${o.id}: ${RIDER.name}.`); break; }
  case 'r-deliver': { const o=O(v); const c = document.getElementById('dl-code').value.trim(); if(c!==o.code){ ui.err=true; break; } deliver(o); break; }
  case 'sms-open': ui.overlay = {type:'sms', oid:v}; ui.input.smsCode=''; break;
  case 'sms-go': { const o=O(v); const c = document.getElementById('sms-code').value.trim(); ui.overlay=null; if(c!==o.code){ ui.err=true; break; } deliver(o); ui.toast={text:'SMS → 8080 ✓', kind:'sms'}; break; }
  case 'refuse-open': ui.overlay = {type:'refuse', oid:v}; ui.refuseR='rNot'; break;
  case 'refuse-r': ui.refuseR = v; break;
  case 'refuse-go': { const o=O(v); advance(12); setOrder(o,'refused'); ui.overlay=null; S.rider.earnedToday += Math.round(o.fee/2); P(o.pid).status='live';
    notify('buyer', S.lang==='fr'?`Retour confirmé (${t(ui.refuseR)}). ${fcfa(o.price)} remboursés.`:`Return confirmed (${t(ui.refuseR)}). ${fcfa(o.price)} refunded.`,'sms'); notify('seller', S.lang==='fr'?`Article refusé : ${t(ui.refuseR)}. Le livreur vous le rapporte.`:`Item refused: ${t(ui.refuseR)}. The rider is bringing it back.`); notify('admin', `${o.id} · ${t('st_refused')}`); break; }
  case 'remit': ui.toast = {text:(S.lang==='fr'?'Versé à Grendi par MoMo : ':'Handed in to Grendi via MoMo: ')+fcfa(S.rider.cash)}; S.rider.cash = 0; break;
  // admin
  case 'app': { const x=S.apps.find(a=>a.id===v); x.status = el.dataset.k; ui.adminFlash = `${x.name} · ${t(x.status)}`; break; }
  case 'lst': { const p=P(v); p.status = el.dataset.k==='live'?'live':'rejected'; ui.adminFlash = `${L(p.name)} · ${t(p.status==='live'?'approved':'rejected')}`; if(p.status==='rejected') S.products = S.products.filter(x=>x.id!==v); notify('seller', `${L(p.name)} · ${t(el.dataset.k==='live'?'live':'rejected')}`); break; }
  case 'disp': { const d=S.disputes.find(x=>x.id===v); d.status='resolved'; d.result=el.dataset.k; const o=O(d.oid); setOrder(o, el.dataset.k==='refunded'?'refused':'completed'); ui.adminFlash = `${o.id} · ${t(el.dataset.k)}`; break; }
  case 'set-cod': S.settings.cod = !S.settings.cod; break;
  case 'trk-skip': { const o=O(v); if(o && o.trk) o.trk.t0 = Date.now() - o.trk.dur; tick(); return; }
  case 'switch-shop': S.sess.seller = v; S.login.seller.acct = v; break;
  default: return;
  }
  if(S.role==='admin' && S.sess.admin){ const o=demoOrder(); if(o && RANK[o.status]>=6) S.adminSeen = true; }
  save(); render();
}
function captureListing(){
  const g = id => document.getElementById(id);
  if(g('l-title')) ui.input.lt = g('l-title').value;
  if(g('l-price')) ui.input.lp = g('l-price').value;
  if(g('l-size')) ui.input.lz = g('l-size').value;
}
function placeOrder(pid){
  if(!S.sess.seller) S.login.seller.acct = P(pid).sid;
  const p = P(pid); const key = `${pid}|Aïcha`; const price = S.deals[key] || p.price; const zone = ui.input.zone || BUYER.zone; const pay = ui.input.pay || 'momo';
  advance(2);
  const o = {id:'GR-'+(S.seq++), pid, sid:p.sid, buyer:BUYER.name, zone, landmark: ui.input.landmark || '', size: ui.input.size || p.sizes[0], price, fee:fee(zone), pay, status:'placed', events:[{s:'placed', t:S.clock}], pickup:code4(), code:code4(), demo:true};
  S.orders.push(o); if(!p.lot) p.status = 'sold';
  ui.overlay = {type:'paid', oid:o.id}; ui.input = {};
  notify('seller', (S.lang==='fr'?'Nouvelle commande ':'New order ')+`${o.id} · ${L(p.name)} · ${fcfa(price)}`);
  notify('admin', `${o.id} · ${fcfa(price+o.fee)}`);
}
function deliver(o){
  advance(STEP_MIN.completed); setOrder(o,'completed');
  S.rider.earnedToday += o.fee; S.rider.trips += 1; if(o.pay==='cod') S.rider.cash += o.price + o.fee;
  const c = S.settings.commission/100;
  notify('seller', (S.lang==='fr'?`${o.id} livrée. ${fcfa(o.price*(1-c))} versés sur votre MoMo.`:`${o.id} delivered. ${fcfa(o.price*(1-c))} paid to your MoMo.`), 'sms');
  notify('buyer', S.lang==='fr'?`Commande ${o.id} livrée. Merci d’avoir utilisé Grendi !`:`Order ${o.id} delivered. Thanks for using Grendi!`);
  notify('admin', `${o.id} · ${t('st_completed')}`);
}
function autoReply(key, role){
  // When the buyer writes, the demo seller answers after a moment so the chat feels alive.
  if(role!=='buyer') return;
  const c = S.chats[key]; const last = c.msgs[c.msgs.length-1].text || '';
  setTimeout(()=>{
    advance(2);
    const reply = /dispo|avail/i.test(last) ? t('sq1') : /livr|deliver/i.test(last) ? t('sq2') : /tach|stain/i.test(last) ? t('sq3') : (S.lang==='fr'?'D’accord, je vous écoute.':'Sure, go ahead.');
    c.msgs.push({from:'seller', type:'text', text:reply, t:S.clock}); save(); if(S.role==='buyer') render(); else S.notes.buyer++;
  }, 1300);
}

/* ================= events ================= */
app.addEventListener('click', e=>{
  const stop = e.target.closest('[data-stop]');
  const el = e.target.closest('[data-a]');
  if(!el) return;
  if(stop && el.classList.contains('ov')) return; // clicks on empty space inside a sheet don't close it
  if(el.tagName==='INPUT' || el.tagName==='SELECT') return;
  e.preventDefault();
  act(el.dataset.a, el);
});
app.addEventListener('input', e=>{
  const el = e.target;
  if(el.id==='q'){ S.filt.q = el.value; save(); const pos = el.selectionStart; render(); const n=document.getElementById('q'); n.focus(); n.setSelectionRange(pos,pos); }
  if(el.dataset.a==='set'){ S.settings[el.dataset.k] = num(el.value); save(); }
  if(el.dataset.a==='fee'){ S.settings.fees[el.dataset.k] = num(el.value); save(); }
  if(el.id==='sms-code'){ ui.input.smsCode = el.value; const m = el.closest('.sheet').querySelector('.msg'); m.textContent = m.textContent.replace(/\s\d*$/,' ') + el.value; }
  if(el.id==='landmark') ui.input.landmark = el.value;
  if(el.id==='offer-amt') ui.offerAmt = el.value;
});
app.addEventListener('change', e=>{
  if(e.target.id==='zone'){ ui.input.zone = e.target.value; const lm=document.getElementById('landmark'); if(lm) ui.input.landmark=lm.value; render(); }
});
app.addEventListener('keydown', e=>{
  if(e.key==='Enter' && e.target.dataset.enter){ e.preventDefault(); act(e.target.dataset.enter, e.target); }
});
window.addEventListener('storage', e=>{ if(e.key===KEY){ try{ S = JSON.parse(e.newValue) || S; render(); }catch(_){} } });

render();
})();
