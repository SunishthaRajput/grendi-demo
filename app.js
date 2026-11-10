/* Grendi interactive demo — buyer, seller, rider and admin apps sharing one live state.
   All data is fictional demo data. State is saved in this browser only. */
(function(){
'use strict';

/* ================= i18n ================= */
const T = {
fr:{
  frozenSt:'Gelé', awaitingS:'À valider',
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
  deliveryFees:'Frais de livraison par quartier (FCFA)', codOn:'Paiement à la livraison autorisé', codLimit:'Plafond d’espèces par livreur (FCFA)', confirmWin:'Délai de confirmation vendeur (heures)', settingsNote:'Les changements s’appliquent tout de suite dans les apps.',
  zoneL:'Zone', rating:'Note', state:'État', busy:'En course', loggedAs:'Connecté en tant que',
  minutes:'min', hAgo:'il y a', step:'Étape',
  liveTrack:'Suivi en direct', arrivesIn:'Arrive dans', arrived:'Arrivé', searching:'Recherche d’un livreur à proximité…', nearbyRiders:'livreurs à proximité',
  toSellerB:'récupère votre colis chez', toBuyerB:'est en route vers vous', toSellerS:'arrive à votre boutique', toSellerR:'Direction', toBuyerR:'Direction',
  arrivedSeller:'est arrivé à votre boutique. Demandez-lui son code.', arrivedBuyer:'est arrivé ! Vérifiez l’article, puis donnez votre code.', arrivedRiderS:'Vous êtes arrivé chez le vendeur. Montrez votre code.', arrivedRiderB:'Vous êtes arrivé chez le client. Demandez son code.',
  skip:'Avancer jusqu’à l’arrivée', lightMap:'Carte légère (moins de 15 Ko) : fonctionne même en 2G.', gpsLive:'GPS en direct', smsPos:'Sans données : position envoyée par SMS toutes les 2 min',
  liveMap:'Carte en direct', fleet:'Flotte en direct', idle:'Disponible', eta:'Arrivée', trackLink:'Suivi', shop:'Vendeur', you:'Vous',
  relayPaid:'Frais point relais : {b} + {p} % du prix de l’article. Versés au commerçant seulement quand vous retirez votre colis.', relayFormula:'Votre gain par colis = {b} + {p} % de la valeur de l’article. Il est bloqué tant que le colis est en dépôt et versé sur MoMo dès que le client le retire avec son code.',
  relayDelFee:'Livraison jusqu’au point relais', relayShopFee:'Frais point relais', relayFeeHow:'{b} + {p} % × {v}', pendingPickup:'En attente de retrait', heldTillPickup:'bloqué jusqu’au retrait', relayBase:'Frais fixe point relais par colis (FCFA)', relayPct:'Part de la valeur de l’article pour le point relais (%)', relayExample:'Exemple : t-shirt à 5 000 FCFA → {b} + {p} % × 5 000 = {x}', pickupDelL:'Livraison point relais', shopFeeCol:'Frais point relais', relayAtShopPaid:'Pas de code ni de vérification : vous êtes payé dès que vous confirmez le dépôt.',
  relay:'Point relais', relayHero:'Gagnez de l’argent en gardant des colis dans votre boutique.', chooseShop:'Choisissez votre boutique partenaire',
  g1:'Choisir un article, discuter ou faire une offre, payer par MoMo, choisir domicile ou point relais', g3:'Accepter la course : le chat avec le client s’ouvre', g5:'Livrer : code du client à domicile, ou dépôt au point relais', g6:'Remettre le colis contre le code de retrait du client', g6h:'Seulement pour un retrait en point relais', g7:'Valider la commande ou signaler un problème (48 h)', g8:'Voir le paiement versé, les litiges, les points relais et les réglages',
  total:'Durée totale', lg1:'Le vendeur est payé quand l’acheteur valide, ou 48 h après la livraison sans réponse', lg2:'Chat livreur–client ouvert seulement pendant la livraison',
  st_atshop:'Au point relais · prêt à retirer', st_delivered:'Livrée · en attente de validation', st_completed:'Validée · vendeur payé', st_disputed:'Problème signalé · paiement gelé', st_refunded:'Remboursée à l’acheteur',
  deliveryMode:'Mode de livraison', homeDel:'Livraison à domicile', homeDelS:'Le livreur vous appelle et vous remet le colis en main propre.', relayDel:'Retrait en point relais', relayDelS:'Récupérez votre colis quand vous voulez, avec un code, dans une boutique partenaire près de chez vous.', chooseRelay:'Choisissez le point relais', openH:'Ouvert',
  toRelay:'Livrez au point relais', dropBtn:'Colis déposé au point relais', relayWillGet:'Votre colis sera déposé chez', relayCodeSoon:'Vous recevrez un code de retrait par SMS dès le dépôt.', pickupCodeT:'Votre code de retrait', pickupCodeH:'Montrez ce code au commerçant pour récupérer votre colis.',
  validateT:'Votre commande est livrée. Tout est en ordre ?', validateBtn:'Valider la commande', reportBtn:'Signaler un problème', autoRelease:'Sans réponse de votre part, le vendeur sera payé automatiquement', sim48:'Simuler 48 h sans réponse', validated:'Commande validée. Le vendeur a été payé.', autoReleased:'Validée automatiquement après 48 h sans réponse. Le vendeur a été payé.', frozen:'Problème signalé : le paiement du vendeur est gelé jusqu’à la décision de l’équipe Grendi.',
  reportT:'Signaler un problème', describe:'Décrivez le problème', describePh:'Ex. : il y a une tache sur la manche gauche…', addPhoto:'Ajouter une photo', sendReport:'Envoyer le signalement', rMissing:'Article manquant',
  sellerWait:'Livrée. Vous serez payé dès que l’acheteur valide, ou automatiquement', sellerFrozen:'L’acheteur a signalé un problème. Votre paiement est gelé pendant l’examen par Grendi.', frozenL:'Gelé (litige)', awaiting:'En attente de validation',
  riderChat:'Écrire au livreur', buyerChat:'Écrire au client', chatOpened:'Discussion ouverte avec le livreur. Elle se fermera automatiquement après la livraison.', chatClosed:'Discussion fermée : la livraison est terminée.', rq1:'Je descends dans 2 min', rq2:'Je suis au portail bleu', rq3:'Appelez-moi en arrivant', dq1:'Je suis en route', dq2:'Je suis devant, où êtes-vous ?', dq3:'J’arrive dans 5 min', riderAuto:'D’accord, bien noté 👍', chatOpen:'Ouverte', chatShut:'Fermée',
  location:'Localisation', changeLoc:'Changer de localisation', city:'Ville', cityOnly:'Pour le lancement, on achète et on vend dans sa ville. Articles affichés :', otherCity:'Cet article est vendu à', otherCityS:'Changez votre localisation pour l’acheter.', locSaved:'Localisation mise à jour :', workCity:'Ville de travail', jobsOther:'course(s) disponible(s) à', switchCity:'Passer à',
  reviews:'Avis clients', writeReview:'Votre note et votre avis', reviewPh:'Racontez votre expérience : qualité, taille, délai de livraison…', publishReview:'Publier l’avis', noReviews:'Pas encore d’avis.', yourReview:'Votre avis', reviewsN:'avis',
  parcels:'Colis', toReceive:'À recevoir', inStore:'En dépôt', handedOver:'Remis', clientCode:'Code de retrait du client', handBtn:'Remettre le colis', relayEarn:'Gains ce mois', relayHanded:'Colis remis au client.', newParcel:'Colis déposé chez vous :', expectedParcel:'Colis attendu :', aRelays:'Points relais', heldNow:'Colis en dépôt', homeFeeL:'Domicile', relayFeeL:'Point relais', shopEarnL:'Gain boutique', validWin:'Délai avant paiement automatique (heures)', toRelayL:'Au point relais', kpiAwait:'À valider par l’acheteur', yourGain:'Votre gain', perParcel:'par colis', perZone:'par quartier', riderGets:'Livreur', today:'Aujourd’hui',
  sellerFree:'Zéro commission, zéro frais de livraison : l’acheteur paie l’article et la livraison. Vous recevez 100 % du prix de vente.', sellerFeesL:'Commission et livraison', paidByBuyer:'payées par l’acheteur',
  boost:'Booster', boostT:'Booster cet article', boostS:'Votre article passe en tête des résultats dans votre ville, avec le badge « Sponsorisé ». C’est optionnel : vendre sur Grendi reste gratuit.', day1:'1 jour', days:'jours', duration:'Durée', boostPay:'Payer le boost', sponsored:'Sponsorisé', boostedUntil:'Boosté jusqu’à', boostDone:'Boost activé jusqu’à', boostExtend:'Prolonger', boostRev:'Revenus des boosts', boostsL:'Boosts achetés par les vendeurs', boostPrice:'Prix du boost (FCFA)', boostCta:'Vendez plus vite : boostez un article pour qu’il s’affiche en premier.', sellerFreeA:'Grendi ne prend rien sur les ventes : le vendeur reçoit 100 % du prix et l’acheteur paie seulement l’article et la livraison. Grendi gagne uniquement les boosts, payés par les vendeurs qui le souhaitent.'
},
en:{
  frozenSt:'Frozen', awaitingS:'To validate',
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
  deliveryFees:'Delivery fees by neighbourhood (FCFA)', codOn:'Cash on delivery allowed', codLimit:'Cash limit per rider (FCFA)', confirmWin:'Seller confirmation window (hours)', settingsNote:'Changes apply in the apps straight away.',
  zoneL:'Zone', rating:'Rating', state:'State', busy:'On a job', loggedAs:'Signed in as',
  minutes:'min', hAgo:'ago', step:'Step',
  liveTrack:'Live tracking', arrivesIn:'Arrives in', arrived:'Arrived', searching:'Finding a rider nearby…', nearbyRiders:'riders nearby',
  toSellerB:'is collecting your parcel from', toBuyerB:'is on the way to you', toSellerS:'is coming to your shop', toSellerR:'Heading to', toBuyerR:'Heading to',
  arrivedSeller:'has arrived at your shop. Ask for his code.', arrivedBuyer:'has arrived! Check the item, then give your code.', arrivedRiderS:'You’ve arrived at the seller. Show your code.', arrivedRiderB:'You’ve arrived at the buyer. Ask for their code.',
  skip:'Skip to arrival', lightMap:'Light map (under 15 KB): works even on 2G.', gpsLive:'Live GPS', smsPos:'No data: position sent by SMS every 2 min',
  liveMap:'Live map', fleet:'Live fleet', idle:'Available', eta:'Arrival', trackLink:'Track', shop:'Seller', you:'You',
  relayPaid:'Pickup shop fee: {b} + {p}% of the item price. Paid to the shopkeeper only when you collect your parcel.', relayFormula:'Your earnings per parcel = {b} + {p}% of the item’s value. Held while the parcel is in your shop, paid to MoMo as soon as the buyer collects it with their code.',
  relayDelFee:'Delivery to pickup shop', relayShopFee:'Pickup shop fee', relayFeeHow:'{b} + {p}% × {v}', pendingPickup:'Waiting for collection', heldTillPickup:'held until collected', relayBase:'Pickup shop fixed fee per parcel (FCFA)', relayPct:'Pickup shop share of item value (%)', relayExample:'Example: 5,000 FCFA T-shirt → {b} + {p}% × 5,000 = {x}', pickupDelL:'Pickup-shop delivery', shopFeeCol:'Pickup shop fee', relayAtShopPaid:'No code or check needed: you’re paid as soon as you confirm the drop.',
  relay:'Pickup shop', relayHero:'Earn money by holding parcels in your shop.', chooseShop:'Choose your partner shop',
  g1:'Pick an item, chat or make an offer, pay by MoMo, choose home or pickup shop', g3:'Accept the job: the chat with the buyer opens', g5:'Deliver: buyer’s code at home, or drop at the pickup shop', g6:'Hand over the parcel against the buyer’s pickup code', g6h:'Only for pickup-shop orders', g7:'Validate the order or report an issue (48 h)', g8:'See the payout, disputes, pickup shops and settings',
  total:'Total time', lg1:'The seller is paid when the buyer validates, or 48 h after delivery with no reply', lg2:'Rider–buyer chat is open only during delivery',
  st_atshop:'At pickup shop · ready to collect', st_delivered:'Delivered · waiting for validation', st_completed:'Validated · seller paid', st_disputed:'Issue reported · payment frozen', st_refunded:'Refunded to buyer',
  deliveryMode:'Delivery method', homeDel:'Home delivery', homeDelS:'The rider calls you and hands you the parcel.', relayDel:'Pickup shop', relayDelS:'Collect your parcel whenever suits you, with a code, at a partner shop near you.', chooseRelay:'Choose the pickup shop', openH:'Open',
  toRelay:'Deliver to the pickup shop', dropBtn:'Parcel dropped at pickup shop', relayWillGet:'Your parcel will be dropped at', relayCodeSoon:'You’ll get a pickup code by SMS as soon as it’s dropped.', pickupCodeT:'Your pickup code', pickupCodeH:'Show this code to the shopkeeper to collect your parcel.',
  validateT:'Your order has been delivered. Is everything OK?', validateBtn:'Validate order', reportBtn:'Report an issue', autoRelease:'If you don’t reply, the seller is paid automatically', sim48:'Simulate 48 h with no reply', validated:'Order validated. The seller has been paid.', autoReleased:'Validated automatically after 48 h with no reply. The seller has been paid.', frozen:'Issue reported: the seller’s payment is frozen until the Grendi team decides.',
  reportT:'Report an issue', describe:'Describe the problem', describePh:'E.g. there’s a stain on the left sleeve…', addPhoto:'Add a photo', sendReport:'Send report', rMissing:'Item missing',
  sellerWait:'Delivered. You’ll be paid as soon as the buyer validates, or automatically', sellerFrozen:'The buyer reported an issue. Your payment is frozen while Grendi reviews it.', frozenL:'Frozen (dispute)', awaiting:'Waiting for validation',
  riderChat:'Message the rider', buyerChat:'Message the buyer', chatOpened:'Chat open with the rider. It closes automatically after delivery.', chatClosed:'Chat closed: delivery is complete.', rq1:'Coming down in 2 min', rq2:'I’m at the blue gate', rq3:'Call me when you arrive', dq1:'I’m on my way', dq2:'I’m outside, where are you?', dq3:'Arriving in 5 min', riderAuto:'OK, noted 👍', chatOpen:'Open', chatShut:'Closed',
  location:'Location', changeLoc:'Change location', city:'City', cityOnly:'For launch, people buy and sell within their own city. Showing items in:', otherCity:'This item is sold in', otherCityS:'Change your location to buy it.', locSaved:'Location updated:', workCity:'Working city', jobsOther:'job(s) available in', switchCity:'Switch to',
  reviews:'Customer reviews', writeReview:'Your rating and review', reviewPh:'Tell others about it: quality, fit, delivery time…', publishReview:'Post review', noReviews:'No reviews yet.', yourReview:'Your review', reviewsN:'reviews',
  parcels:'Parcels', toReceive:'Coming in', inStore:'In the shop', handedOver:'Handed over', clientCode:'Buyer’s pickup code', handBtn:'Hand over parcel', relayEarn:'Earned this month', relayHanded:'Parcel handed to the buyer.', newParcel:'Parcel dropped at your shop:', expectedParcel:'Parcel on its way:', aRelays:'Pickup shops', heldNow:'Parcels held', homeFeeL:'Home', relayFeeL:'Pickup shop', shopEarnL:'Shop earns', validWin:'Time before automatic payout (hours)', toRelayL:'To pickup shop', kpiAwait:'Waiting for buyer validation', yourGain:'You earn', perParcel:'per parcel', perZone:'by neighbourhood', riderGets:'Rider', today:'Today',
  sellerFree:'Zero commission, zero delivery fee: the buyer pays for the item and the delivery. You receive 100% of the sale price.', sellerFeesL:'Commission and delivery', paidByBuyer:'paid by the buyer',
  boost:'Boost', boostT:'Boost this listing', boostS:'Your listing goes to the top of results in your city, with a “Sponsored” badge. It’s optional: selling on Grendi stays free.', day1:'1 day', days:'days', duration:'Duration', boostPay:'Pay for boost', sponsored:'Sponsored', boostedUntil:'Boosted until', boostDone:'Boost active until', boostExtend:'Extend', boostRev:'Boost revenue', boostsL:'Boosts bought by sellers', boostPrice:'Boost price (FCFA)', boostCta:'Sell faster: boost a listing so it shows first.', sellerFreeA:'Grendi takes nothing on a sale: the seller receives 100% of the price and the buyer pays only for the item and the delivery. Grendi earns only from boosts, paid by sellers who choose them.'
}};

/* ================= data ================= */
const U = id => q => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${q}&q=70`;
const SELLERS = {
  s1:{id:'s1', name:'Friperie Ngono', type:'individual', zone:'Akwa', phone:'6 99 41 22 07', rating:4.8, sales:312, since:'2025', color:'#B86A00', owner:'Marie Ngono'},
  s2:{id:'s2', name:'Couture Belle Wax', type:'individual', zone:'Bonapriso', phone:'6 77 90 15 33', rating:4.9, sales:128, since:'2026', color:'#6A45C9', owner:'Brenda Eyenga'},
  s3:{id:'s3', name:'Grossiste Bonabéri', type:'wholesaler', zone:'Bonabéri', phone:'6 55 08 71 49', rating:4.7, sales:86, since:'2025', color:'#2D5BD0', owner:'Alain Fotso'},
  s4:{id:'s4', name:'Bastos Fashion House', type:'individual', zone:'Bastos', phone:'6 98 23 40 11', rating:4.6, sales:57, since:'2026', color:'#C2362B', owner:'Sandrine Abega'}
};
const BUYER = {name:'Aïcha Mbarga', phone:'6 70 12 34 56', zone:'Bonamoussadi'};
const RIDER = {name:'Junior Tchoua', phone:'6 94 55 18 02', rating:4.9, trips:214, bike:'Moto · LT 482 AB'};
const CITIES = {
  'Douala':{zones:['Akwa','Bonapriso','Deïdo','Bonamoussadi','Makepe','Bonabéri','Logbaba','Ndokotti']},
  'Yaoundé':{zones:['Bastos','Etoa-Meki','Mokolo','Centre-ville','Essos','Mvog-Mbi','Biyem-Assi','Ngousso']}
};
const cityOf = zone => Object.keys(CITIES).find(c=>CITIES[c].zones.includes(zone)) || 'Douala';
const sellerCity = sid => cityOf(SELLERS[sid].zone);
const RELAYS = {
  r1:{id:'r1', name:'Alimentation Chez Tantine Rose', zone:'Bonamoussadi', addr:{fr:'Carrefour Bonamoussadi, à côté de la boulangerie', en:'Bonamoussadi junction, next to the bakery'}, hours:'7h–21h', phone:'6 75 31 08 44', owner:'Rose Ekambi', color:'#B4236F'},
  r2:{id:'r2', name:'Quincaillerie Ngando', zone:'Makepe', addr:{fr:'Makepe Missoké, face à l’école', en:'Makepe Missoké, opposite the school'}, hours:'7h30–20h', phone:'6 96 12 77 30', owner:'Paul Ngando', color:'#8A5A00'},
  r3:{id:'r3', name:'Boutique Mama Ewodo', zone:'Akwa', addr:{fr:'Près du marché central, Akwa', en:'Near the central market, Akwa'}, hours:'8h–20h', phone:'6 77 45 62 19', owner:'Mama Ewodo', color:'#2D5BD0'},
  r4:{id:'r4', name:'Call-box Deïdo Express', zone:'Deïdo', addr:{fr:'Rond-point Deïdo', en:'Deïdo roundabout'}, hours:'7h–22h', phone:'6 90 18 55 03', owner:'Ibrahim Moussa', color:'#0E8A63'},
  r5:{id:'r5', name:'Épicerie Bastos', zone:'Bastos', addr:{fr:'Bastos, près de la boulangerie', en:'Bastos, near the bakery'}, hours:'7h–21h', phone:'6 99 60 21 48', owner:'Jeanne Atangana', color:'#6A45C9'},
  r6:{id:'r6', name:'Kiosque Essos', zone:'Essos', addr:{fr:'Carrefour Essos', en:'Essos junction'}, hours:'6h30–21h', phone:'6 70 88 13 27', owner:'Martin Owona', color:'#C2362B'}
};
const relaysIn = (city, zone) => Object.values(RELAYS).filter(r=>cityOf(r.zone)===city).sort((a,b)=>(b.zone===zone)-(a.zone===zone));

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
  name:{fr:'Hauts friperie, au choix', en:'Thrift tops, your pick'}, desc:{fr:'Choisissez votre couleur dans le chat.', en:'Pick your colour in the chat.'}},
 {id:'p19', sid:'s4', cat:'men', kind:'thrift', img:'1543076447-215ad9ba6923', price:6500, sizes:['M','L'], cond:'a', neg:true,
  name:{fr:'Veste en jean brut', en:'Raw denim jacket'}, desc:{fr:'Friperie Grade A, livrée partout à Yaoundé.', en:'Grade A thrift, delivered anywhere in Yaoundé.'}},
 {id:'p20', sid:'s4', cat:'men', kind:'new', img:'1564584217132-2271feaeb3c5', price:2000, sizes:['S','M','L','XL'], cond:'new', neg:false,
  name:{fr:'T-shirt gris chiné', en:'Heather grey T-shirt'}, desc:{fr:'Coton doux, coupe droite.', en:'Soft cotton, straight cut.'}},
 {id:'p21', sid:'s4', cat:'kids', kind:'thrift', img:'1560506840-ec148e82a604', price:4500, sizes:['2-4 ans','4-6 ans'], cond:'a', neg:true,
  name:{fr:'Robes fillette colorées', en:'Colourful girls’ dresses'}, desc:{fr:'Plusieurs motifs, choisissez dans le chat.', en:'Several prints, pick in the chat.'}},
 {id:'p22', sid:'s4', cat:'women', kind:'thrift', img:'1582719188393-bb71ca45dbb9', price:3500, sizes:['S','M','L'], cond:'b', neg:true,
  name:{fr:'Pulls et gilets friperie', en:'Thrift sweaters and cardigans'}, desc:{fr:'Pour les soirées fraîches de Yaoundé.', en:'For Yaoundé’s cool evenings.'}}
];
const SELL_PHOTOS = ['1540221652346-e5dd6b50f3e7','1582719188393-bb71ca45dbb9','1470309864661-68328b2cd0a5','1622290291468-a28f7a7dc6a8','1564584217132-2271feaeb3c5','1543076447-215ad9ba6923','1560506840-ec148e82a604','1604072374690-0e7d7bddd54e'];

const RANK = {placed:1, confirmed:2, ready:3, assigned:4, picked:5, atshop:6, delivered:7, completed:8, disputed:8, cancelled:0, refused:0, refunded:0};
const STEP_MIN = {confirmed:18, ready:24, assigned:4, picked:16, delivered:31, atshop:26, collect:95, completed:12};

/* ================= state ================= */
const KEY = 'grendi-demo-v7';
const BOOST_DAYS = [1, 3, 7];
const SEED_BOOSTS = [{pid:'p2', days:3, t:9*60+5-300}, {pid:'p8', days:1, t:9*60+5-120}, {pid:'p19', days:7, t:9*60+5-2000}];
const START = 9*60 + 5; // Monday 09:05
const SEED_REVIEWS = [
  {sid:'s1', author:'Nadège K.', stars:5, t:START-60, text:{fr:'Robe reçue en moins de 2 h, exactement comme sur les photos. Merci !', en:'Dress arrived in under 2 hours, exactly like the photos. Thanks!'}},
  {sid:'s1', author:'Paul E.', stars:4, t:START-900, text:{fr:'Bonne qualité pour de la friperie. Petite odeur de stockage, partie au premier lavage.', en:'Good quality for thrift. Slight storage smell, gone after one wash.'}},
  {sid:'s1', author:'Clarisse T.', stars:5, t:START-2600, text:{fr:'Vendeuse très réactive dans le chat, elle m’a envoyé d’autres photos.', en:'Very responsive seller in the chat, she sent me extra photos.'}},
  {sid:'s2', author:'Linda B.', stars:5, t:START-80, text:{fr:'Robe magnifique, couture très propre. Je recommande.', en:'Beautiful dress, very clean sewing. Recommended.'}},
  {sid:'s2', author:'Mireille A.', stars:5, t:START-3000, text:{fr:'Sur mesure en 4 jours, parfait pour le mariage de ma sœur.', en:'Made to measure in 4 days, perfect for my sister’s wedding.'}},
  {sid:'s3', author:'Serge M.', stars:4, t:START-170, text:{fr:'Lot conforme. Quelques XL en plus des M, mais livraison rapide.', en:'Lot as described. A few extra XLs instead of Ms, but fast delivery.'}},
  {sid:'s3', author:'Mama Kamga', stars:5, t:START-4000, text:{fr:'Je revends au marché, mes clientes adorent.', en:'I resell at the market, my customers love it.'}},
  {sid:'s4', author:'Estelle N.', stars:5, t:START-500, text:{fr:'Livraison à Biyem-Assi le jour même, très bon contact.', en:'Same-day delivery to Biyem-Assi, very friendly.'}}
];
function seed(){
  return {
    lang:'fr', role:'buyer', clock:START,
    sess:{buyer:null, seller:null, rider:null, relay:null, admin:null},
    login:{buyer:{step:0}, seller:{step:0, acct:'s1'}, rider:{step:0}, relay:{step:0, acct:'r1'}, admin:{}},
    nav:{buyer:{s:'home'}, seller:{s:'dash'}, rider:{s:'home'}, relay:{s:'home'}, admin:{s:'overview'}},
    city:'Douala', bzone:'Bonamoussadi', rchats:{}, relayEarn:{r1:18400, r2:9600, r3:12300, r4:7200, r5:5400, r6:3900},
    reviews: SEED_REVIEWS.map(r=>({...r})),
    filt:{cat:'all', kind:'all', q:''},
    products: PRODUCTS.map(p=>{ const b = SEED_BOOSTS.find(x=>x.pid===p.id); return {...p, status:'live', views: 40 + (p.price % 97), boostUntil: b ? b.t + b.days*1440 : 0}; }),
    boosts: SEED_BOOSTS.map(b=>({pid:b.pid, sid:PRODUCTS.find(p=>p.id===b.pid).sid, days:b.days, amount:{1:500, 3:1200, 7:2500}[b.days], pay:'momo', t:b.t})),
    chats:{
      'p8|Paul E.':{pid:'p8', buyer:'Paul E.', msgs:[{from:'buyer', type:'text', text:'Bonjour, la veste est toujours dispo en L ?', t:START-42}]},
      'p11|Mama Kamga':{pid:'p11', buyer:'Mama Kamga', msgs:[{from:'buyer', type:'offer', amount:26000, status:'pending', t:START-25},{from:'buyer', type:'text', text:'Je prends 3 lots si vous faites 26 000.', t:START-24}]}
    },
    deals:{},
    orders:[
      mkSeed('GR-1036','p5','Clarisse T.','Deïdo',4500,800,'momo','disputed',START-260),
      mkSeed('GR-1037','p9','Paul E.','Makepe',4000,1000,'om','completed',START-230),
      mkSeed('GR-1038','p10','Serge M.','Logbaba',2500,1200,'om','completed',START-190),
      mkSeed('GR-1039','p4','Nadège K.','Akwa',5000,700,'momo','completed',START-150),
      mkSeed('GR-1040','p6','Linda B.','Bonamoussadi',9000,1000,'momo','completed',START-95)
    ],
    seq:1041,
    apps:[
      {id:'a1', type:'seller', name:'Boutique Yaba Kids', owner:'Yaba Ndzié', zone:'Makepe', docs:['CNI recto','CNI verso','Selfie'], status:'pending', t:START-35},
      {id:'a2', type:'rider', name:'Eric Nana', owner:'Eric Nana', zone:'Deïdo', docs:['CNI','Permis A','Photo moto'], status:'pending', t:START-20}
    ],
    disputes:[{id:'d1', oid:'GR-1036', reason:'rNot', claim:{fr:'« La robe a une déchirure sous le bras, pas mentionnée dans l’annonce. »', en:'“The dress has a tear under the arm that wasn’t in the listing.”'}, status:'open'}],
    settings:{boost1:500, boost3:1200, boost7:2500, confirmH:12, validH:48, relayBase:200, relayPct:2,
      fees:{Akwa:700, Bonapriso:800, 'Deïdo':800, Bonamoussadi:1000, Makepe:1000, 'Bonabéri':1500, Logbaba:1200, Ndokotti:1000, Bastos:900, 'Etoa-Meki':900, Mokolo:800, 'Centre-ville':700, Essos:900, 'Mvog-Mbi':800, 'Biyem-Assi':1200, Ngousso:1100},
      sfees:{Akwa:400, Bonapriso:500, 'Deïdo':500, Bonamoussadi:500, Makepe:600, 'Bonabéri':1000, Logbaba:800, Ndokotti:600, Bastos:550, 'Etoa-Meki':550, Mokolo:500, 'Centre-ville':400, Essos:550, 'Mvog-Mbi':500, 'Biyem-Assi':800, Ngousso:700}},
    rider:{online:true, earnedToday:4300, trips:5, noData:false, city:'Douala'},
    dataSaver:false, notes:{buyer:0, seller:0, rider:0, relay:0, admin:0}, rated:{}, likes:{}, adminSeen:false
  };
}
function mkSeed(id,pid,buyer,zone,price,fee,pay,status,t){
  const p = PRODUCTS.find(x=>x.id===pid);
  const ev=[{s:'placed',t}];
  if(status==='completed'||status==='disputed'){let tt=t;['confirmed','ready','assigned','picked','delivered',status].forEach(s=>{tt+=STEP_MIN[s]||15;ev.push({s,t:tt});});}
  return {id, pid, sid:p.sid, buyer, zone, landmark:'', size:p.sizes[0], price, fee, riderFee:fee, relayFee:0, mode:'home', pay, status, events:ev, pickup:'0000', code:'0000', demo:false, rider:RIDER.name};
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
const DAYS = {fr:['Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.','Dim.'], en:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']};
const tdy = (m, ref) => Math.floor(m/1440)===Math.floor(ref/1440) ? hm(m) : hmd(m);
const hmd = m => DAYS[S.lang][((Math.floor(m/1440))%7+7)%7] + ' ' + hm(m);
const dur = m => { m=Math.round(m); const h=Math.floor(m/60), r=m%60; return h ? `${h} h ${String(r).padStart(2,'0')}` : `${r} ${t('minutes')}`; };
const esc = s => String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const P = id => S.products.find(p=>p.id===id);
const O = id => S.orders.find(o=>o.id===id);
const img = (id, w=640) => U(id)(S.dataSaver ? Math.round(w/2.6) : w);
const code4 = () => String(1000 + Math.floor(Math.random()*9000));
const advance = m => { S.clock += m; };
const fee = zone => S.settings.fees[zone] ?? 1000;
const shopFee = price => Math.round((S.settings.relayBase ?? 200) + price*(S.settings.relayPct ?? 2)/100);
const rt = k => t(k).replace('{b}', fcfa(S.settings.relayBase ?? 200)).replace('{p}', String(S.settings.relayPct ?? 2).replace('.', S.lang==='fr'?',':'.')).replace('{x}', fcfa(shopFee(5000)));
// Grendi takes nothing on a sale: the buyer pays the item + delivery (+ pickup-shop fee). Grendi earns from seller boosts only.
const tot = o => o.price + o.fee + (o.relayFee||0);
const boostPrice = d => S.settings['boost'+d] ?? 0;
const boosted = p => (p.boostUntil||0) > S.clock;
const untilL = m => { const left = Math.max(0, m - S.clock), d = Math.floor(left/1440), h = Math.round((left%1440)/60); return `${hmd(m)} (${d ? d+(S.lang==='fr'?' j':' d')+(h?' '+h+' h':'') : h+' h'})`; };
const sponsoredChip = () => `<span class="chip c-y">${ic('bolt','')}${t('sponsored')}</span>`;
const sfee = zone => S.settings.sfees[zone] ?? Math.max(0, fee(zone)-300);
const sellerRating = sid => { const r = S.reviews.filter(x=>x.sid===sid); return r.length ? (r.reduce((a,x)=>a+x.stars,0)/r.length) : SELLERS[sid].rating; };
const stars = n => '★'.repeat(n) + '☆'.repeat(5-n);
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
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
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
const ROLE_C = {buyer:'var(--blue)', seller:'var(--amber)', rider:'var(--g2)', relay:'#B4236F', admin:'var(--vio)'};
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
  <nav class="roles" aria-label="Roles">${['buyer','seller','rider','relay','admin'].map(rb).join('')}</nav><span class="sp"></span>
  <span class="clock">${t('demoClock')} <b>${hmd(S.clock)}</b></span>
  <div class="lang" role="group" aria-label="${t('language')}"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">FR</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">EN</button></div>
  <button class="ghost" data-a="reset">${t('reset')}</button></header>`;
}

function guide(){
  const o = demoOrder(); const r = o ? RANK[o.status] : 0; const relay = o && o.mode==='relay';
  const steps = [
    ['buyer','g1', !!o],
    ['seller','g2', r>=3],
    ['rider','g3', r>=4],
    ['seller','g4', r>=5],
    ['rider','g5', r>=6],
    ['relay','g6', relay ? r>=7 : r>=7, !relay],
    ['buyer','g7', r>=8],
    ['admin','g8', r>=8 && S.adminSeen]
  ];
  const cur = steps.findIndex(x=>!x[2] && !x[3]);
  const html = steps.map(([role,k,done,skip],i)=>`<li class="${done&&!skip?'done':''} ${i===cur?'cur':''}" style="${skip?'opacity:.45':''}"><span class="ck">${done&&!skip?'✓':i+1}</span><span class="tx"><b style="color:${ROLE_C[role]}">${t(role)}</b>${t(k)}${skip?`<br><span class="xs">${t('g6h')}</span>`:''}</span><button class="go" data-a="role" data-v="${role}">${t('open')}</button></li>`).join('');
  let tl = `<p class="sub">${t('noOrder')}</p>`;
  if(o){
    tl = `<ul class="tl">${o.events.map((e,i)=>`<li><span class="tm">${tdy(e.t, o.events[0].t)}</span><span>${t('st_'+e.s)}</span><span class="du">${i?'+'+dur(e.t-o.events[i-1].t):''}</span></li>`).join('')}</ul>`;
    const last = o.events[o.events.length-1].t;
    tl += `<div class="total"><span class="sm">${t('total')}</span><b>${dur(last-o.events[0].t)}</b></div>`;
  }
  return `<aside class="guide">
   <div class="panel"><h3>${t('guideTitle')}</h3><p class="sub">${t('guideSub')}</p><ul class="steps">${html}</ul></div>
   <div class="panel"><h3>${t('timeline')}${o?` · ${o.id}`:''}</h3>${tl}</div>
   <div class="panel"><h3>${t('legend')}</h3><div class="legend"><div>${ic('shield')}${t('lg1')}</div><div>${ic('chat')}${t('lg2')}</div><div>${ic('coins')}${t('lg3')}</div></div><button class="reset" data-a="reset">${t('reset')}</button><p class="credit">${S.lang==='fr'?'Données fictives pour la démo. Photos :':'Fictional demo data. Photos:'} <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a></p></div>
  </aside>`;
}
function stage(){
  if(S.role==='admin') return S.sess.admin ? adminApp() : adminLogin();
  return phone(S.sess[S.role] ? ({buyer:buyerApp, seller:sellerApp, rider:riderApp, relay:relayApp})[S.role]() : loginScreen(S.role));
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
  const hero = {buyer:[t('welcome'),t('welcomeS')], seller:[t('sellerHero'), t('welcomeS')], rider:[t('riderHero'), t('onlineS')], relay:[t('relayHero'), rt('relayFormula')]}[role];
  const num = role==='buyer' ? BUYER.phone : role==='rider' ? RIDER.phone : role==='relay' ? RELAYS[st.acct].phone : SELLERS[st.acct].phone;
  const langSeg = `<div class="field"><label>${t('language')}</label><div class="seg"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">Français</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">English</button></div></div>`;
  let box;
  if(st.step===0){
    let acct = '';
    if(role==='seller') acct = `<div class="field"><label>${t('chooseAcct')}</label><div class="acct">${Object.values(SELLERS).map(s=>`<button data-a="acct" data-v="${s.id}" aria-pressed="${st.acct===s.id}"><span class="av" style="background:${s.color}">${initials(s.name)}</span><span><b>${s.name}</b><br><span class="xs mut">${t(s.type)} · ${s.zone}, ${cityOf(s.zone)}</span></span></button>`).join('')}</div></div>`;
    if(role==='relay') acct = `<div class="field"><label>${t('chooseShop')}</label><div class="acct">${Object.values(RELAYS).map(s=>`<button data-a="acct" data-v="${s.id}" aria-pressed="${st.acct===s.id}"><span class="av" style="background:${s.color}">${initials(s.name)}</span><span><b>${s.name}</b><br><span class="xs mut">${s.zone}, ${cityOf(s.zone)} · ${s.hours}</span></span></button>`).join('')}</div></div>`;
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
  else if(n.s==='rchat') body = rChatView('buyer', n.id);
  else if(n.s==='order') body = bOrder(n.id);
  else body = profile('buyer');
  const myActive = S.orders.filter(o=>o.demo && RANK[o.status]>0 && RANK[o.status]<8).length;
  return body + overlay() + tabs('buyer',[['home',t('home'),'home'],['chats',t('chats'),'chat'],['orders',t('orders'),'bag',myActive],['profile',t('profile'),'user']]);
}
function bHome(){
  const f = S.filt;
  const list = S.products.filter(p=>p.status==='live' && sellerCity(p.sid)===S.city && (f.cat==='all'||p.cat===f.cat) && (f.kind==='all'||p.kind===f.kind) && (!f.q || (L(p.name)+' '+SELLERS[p.sid].name).toLowerCase().includes(f.q.toLowerCase())))
    .map((p,i)=>[p,i]).sort((a,b)=>(boosted(b[0])-boosted(a[0])) || (a[1]-b[1])).map(x=>x[0]); // boosted listings first, otherwise keep the usual order
  const seg = (k, vals) => `<div class="seg">${vals.map(v=>`<button data-a="filt" data-k="${k}" data-v="${v}" aria-pressed="${f[k]===v}">${t(v)}</button>`).join('')}</div>`;
  return `<div class="body"><div class="ah" style="display:grid;gap:10px">
     <div class="row sb"><div><span class="xs mut">${t('hello')}, Aïcha 👋</span><h2 style="font-size:20px">Grendi</h2></div><button class="chip c-n" data-a="loc-open" style="border:1px solid var(--line);cursor:pointer">${ic('pin','')}${S.bzone}, ${S.city} ▾</button></div>
     <label class="search">${ic('search')}<input id="q" placeholder="${t('searchPh')}" value="${esc(f.q)}" data-a="q"></label></div>
   <div class="pad">
     <div class="banner"><b>${t('bannerT')}</b><span>${t('bannerS')}</span></div>
     <div class="note n-b" style="flex-wrap:wrap">${ic('pin')}<span style="flex:1;min-width:160px">${t('cityOnly')} <b>${S.city}</b></span><button class="btn sec sm" data-a="loc-open" style="margin-left:27px">${t('changeLoc')}</button></div>
     ${seg('cat',['all','women','men','kids'])}
     ${seg('kind',['all','thrift','new','wholesale'])}
     <div class="row sb"><h3 style="font-size:16px">${t('near')}</h3><span class="xs mut">${list.length} ${t('results')}</span></div>
     <div class="grid2">${list.map(card).join('') || `<div class="empty" style="grid-column:1/-1">${ic('search')}${t('none')}</div>`}</div>
   </div></div>`;
}
function card(p){
  const s = SELLERS[p.sid]; const liked = S.likes[p.id];
  return `<button class="pc" data-a="open" data-v="${p.id}"><div class="ph">${photo(p.img, L(p.name), 420)}<span class="tagl" style="display:flex;flex-direction:column;gap:4px;align-items:flex-start">${kindChip(p)}${boosted(p)?sponsoredChip():''}</span><span class="heart" data-a="like" data-v="${p.id}" style="color:${liked?'var(--red)':'var(--ink)'}">${liked?icFill('heart'):ic('heart')}</span></div>
   <div class="meta"><span class="price">${fcfa(p.price)}</span><span class="nm">${esc(L(p.name))}</span><span class="loc">${s.zone} · ★ ${sellerRating(s.id).toFixed(1)} · ${p.sizes.join(', ')}</span></div></button>`;
}
function reviewsBlock(sid, max=3){
  const r = S.reviews.filter(x=>x.sid===sid).sort((a,b)=>b.t-a.t);
  const avg = sellerRating(sid);
  return `<div class="card"><div class="row sb"><b>${t('reviews')}</b><span class="sm"><b style="color:var(--amber)">★ ${avg.toFixed(1)}</b> <span class="mut">· ${r.length} ${t('reviewsN')}</span></span></div>
    ${r.length ? r.slice(0,max).map(x=>`<div class="rev"><div class="row sb"><b class="sm">${esc(x.author)}</b><span class="stars-s">${stars(x.stars)}</span></div><p class="sm">${esc(L(x.text))}</p><span class="xs mut">${hmd(x.t)}</span></div>`).join('') : `<p class="sm mut">${t('noReviews')}</p>`}</div>`;
}
function bProduct(id){
  const p = P(id); const s = SELLERS[p.sid]; const key = `${id}|Aïcha`;
  const deal = S.deals[key]; const sizeSel = ui.input.size || p.sizes[0];
  return `<div class="body"><div class="hero-img"><button class="ib float-back" data-a="back" aria-label="Back">${ic('back')}</button>${photo(p.img, L(p.name), 900)}</div>
   <div class="pad">
     <div class="row" style="flex-wrap:wrap">${kindChip(p)}${boosted(p)?sponsoredChip():''}<span class="chip c-n">${p.neg?t('negotiable'):t('fixed')}</span>${p.status!=='live'?`<span class="chip c-r">${t('soldOut')}</span>`:''}</div>
     <div><h2 style="font-size:21px">${esc(L(p.name))}</h2>
       <div class="row" style="margin-top:6px;align-items:baseline"><span class="price" style="font-size:24px${deal?';text-decoration:line-through;color:var(--mut);font-size:17px':''}">${fcfa(p.price)}</span>${deal?`<span class="price" style="font-size:24px;color:var(--g)">${fcfa(deal)}</span><span class="chip c-g">${t('agreed')}</span>`:''}</div>
       ${p.lot?`<p class="sm mut" style="margin-top:4px">${t('lotOf')} ${p.lot} · ${fcfa(p.price/p.lot)} / ${t('perPiece')}</p>`:''}</div>
     <div class="field"><label>${t('size')}</label><div class="sizes">${p.sizes.map(z=>`<button data-a="size" data-v="${esc(z)}" aria-pressed="${z===sizeSel}">${esc(z)}</button>`).join('')}</div></div>
     <div class="kv"><span>${t('condition')}</span><span class="b">${condL(p.cond)}</span></div>
     <p class="sm">${esc(L(p.desc))}</p>
     <div class="card"><div class="seller"><span class="av" style="background:${s.color}">${initials(s.name)}</span><div style="flex:1"><b>${s.name}</b><div class="xs mut">${t(s.type)} · ${s.zone}, ${cityOf(s.zone)} · ★ ${sellerRating(s.id).toFixed(1)} · ${s.sales} ${t('sales')}</div></div><span class="chip c-g">${ic('shield')}${t('verified')}</span></div></div>
     ${sellerCity(p.sid)!==S.city ? `<div class="note n-r">${ic('pin')}<span>${t('otherCity')} <b>${sellerCity(p.sid)}</b>. ${t('otherCityS')}</span></div>` : ''}
     <div class="note n-g">${ic('shield')}<span>${t('escrowNote')}</span></div>
     ${reviewsBlock(p.sid)}
   </div>
   <div class="stickybar"><button class="ib" data-a="call" data-v="${s.id}" aria-label="${t('call')}">${ic('phone')}</button><button class="btn sec sm" data-a="chat-open" data-v="${key}">${ic('chat')}${t('chat')}</button>
     ${sellerCity(p.sid)!==S.city ? `<button class="btn" data-a="loc-open">${t('changeLoc')}</button>` : p.status!=='live' ? `<button class="btn" disabled>${t('soldOut')}</button>` : deal ? `<button class="btn" data-a="checkout" data-v="${id}">${t('buyAt')} ${fcfa(deal)}</button>` : p.neg ? `<div class="btns" style="grid-template-columns:1fr 1fr"><button class="btn y sm" data-a="offer-open" data-v="${key}">${t('makeOffer')}</button><button class="btn sm" data-a="checkout" data-v="${id}">${t('buy')}</button></div>` : `<button class="btn" data-a="checkout" data-v="${id}">${t('buy')}</button>`}
   </div></div>`;
}
function bCheckout(id){
  const p = P(id); const deal = S.deals[`${id}|Aïcha`]; const price = deal || p.price;
  const city = S.city; const zones = CITIES[city].zones;
  const z = zones.includes(ui.input.zone) ? ui.input.zone : S.bzone; const pay = ui.input.pay || 'momo'; const mode = ui.input.mode || 'home';
  const rels = relaysIn(city, z); const rel = RELAYS[ui.input.relay] && cityOf(RELAYS[ui.input.relay].zone)===city ? RELAYS[ui.input.relay] : rels[0];
  const f = fee(z);
  const pm = (v, label, sw) => `<button class="li" data-a="pay" data-v="${v}" style="${pay===v?'border-color:var(--g);background:var(--g-soft)':''}"><span class="av" style="background:${sw};color:${v==='momo'?'#111':'#fff'};font-size:11px">${v==='momo'?'MTN':'OM'}</span><span class="mid"><span class="nm">${label}</span><span class="xs mut">+237 ${BUYER.phone}</span></span>${pay===v?ic('check'):''}</button>`;
  const md = (v, title, sub, icn) => `<button class="li" data-a="mode" data-v="${v}" style="align-items:flex-start;${mode===v?'border-color:var(--g);background:var(--g-soft)':''}"><span class="av" style="background:${mode===v?'var(--g)':'var(--soft)'};color:${mode===v?'#fff':'var(--mut)'}">${ic(icn)}</span><span class="mid"><span class="nm">${title}</span><span class="xs mut" style="white-space:normal">${sub}</span></span><b class="sm">${fcfa(v==='home'?f:sfee(rel.zone)+shopFee(price))}</b></button>`;
  const relayList = mode==='relay' ? `<div class="field"><label>${t('chooseRelay')}</label><div style="display:grid;gap:8px">${rels.map(r=>`<button class="li" data-a="relay-pick" data-v="${r.id}" style="${rel.id===r.id?'border-color:#B4236F;background:#FBE9F2':''}"><span class="av" style="background:${r.color}">${ic('bag')}</span><span class="mid"><span class="nm">${esc(r.name)}</span><span class="xs mut" style="white-space:normal">${esc(L(r.addr))} · ${t('openH')} ${r.hours}</span></span>${rel.id===r.id?ic('check'):''}</button>`).join('')}</div><span class="xs mut">${rt('relayPaid')}</span></div>` : '';
  const dFee = mode==='home' ? f : sfee(rel.zone); const sFee = mode==='relay' ? shopFee(price) : 0;
  return `<div class="body"><div class="ah"><button class="ib" data-a="back">${ic('back')}</button><h2>${t('checkout')}</h2></div><div class="pad">
    <div class="li"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${SELLERS[p.sid].name} · ${t('size')} ${esc(ui.input.size||p.sizes[0])}</span></span><span class="b">${fcfa(price)}</span></div>
    <div class="field"><label>${t('deliveryMode')} · ${city}</label><div style="display:grid;gap:8px">${md('home',t('homeDel'),t('homeDelS'),'home')}${md('relay',t('relayDel'),t('relayDelS'),'bag')}</div></div>
    ${relayList}
    ${mode==='home' ? `<div class="card"><b>${t('deliverTo')}</b>
      <div class="field"><label>${t('zone')} · ${city}</label><select class="inp" id="zone" data-a="zone">${zones.map(x=>`<option ${x===z?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>${t('landmark')}</label><input class="inp" id="landmark" placeholder="${t('landmarkPh')}" value="${esc(ui.input.landmark ?? (S.lang==='fr'?'Carrefour '+z+', derrière la pharmacie':z+' junction, behind the pharmacy'))}"></div>
      <div class="kv"><span>${t('phone')}</span><span>+237 ${BUYER.phone}</span></div></div>` : ''}
    <div class="field"><label>${t('payWith')}</label><div style="display:grid;gap:8px">${pm('momo',t('momo'),'var(--mtn)')}${pm('om',t('om'),'var(--orange)')}</div></div>
    <div class="card"><div class="kv"><span>${t('item')}</span><span>${fcfa(price)}</span></div><div class="kv"><span>${mode==='home'?t('delivery')+' ('+z+')':t('relayDelFee')}</span><span>${fcfa(dFee)}</span></div>${mode==='relay'?`<div class="kv"><span>${t('relayShopFee')}<br><span class="xs">${rt('relayFeeHow').replace('{v}', fcfa(price))}</span></span><span>${fcfa(sFee)}</span></div>`:''}<div class="divider"></div><div class="kv tot"><span>${t('totalL')}</span><span>${fcfa(price+dFee+sFee)}</span></div></div>
    <div class="note n-g">${ic('shield')}<span>${t('lg1')}.</span></div>
    <button class="btn" data-a="pay-go" data-v="${id}" data-relay="${rel.id}">${t('pay')+' '+fcfa(price+dFee+sFee)}</button>
  </div></div>`;
}
function bOrders(){
  const mine = S.orders.filter(o=>o.demo).slice().reverse();
  return `<div class="body"><div class="ah"><h2>${t('myOrders')}</h2></div><div class="pad">${mine.length? mine.map(o=>orderRow(o,'order')).join('') : `<div class="empty">${ic('bag')}${t('noOrders')}<button class="btn sm" data-a="nav" data-v="home">${t('home')}</button></div>`}</div></div>`;
}
function orderRow(o, screen, extra=''){
  const p = P(o.pid);
  const chip = RANK[o.status]===0 ? 'c-r' : o.status==='completed' ? 'c-g' : o.status==='disputed' ? 'c-r' : 'c-y';
  return `<button class="li" data-a="go" data-s="${screen}" data-v="${o.id}"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${o.id} · ${fcfa(S.role==='seller' ? o.price : tot(o))}${extra}</span><span><span class="chip ${chip}">${t('st_'+o.status)}</span></span></span></button>`;
}
const FLOW = o => o.mode==='relay' ? ['placed','confirmed','ready','assigned','picked','atshop','delivered','completed'] : ['placed','confirmed','ready','assigned','picked','delivered','completed'];
function trackList(o){
  const r = RANK[o.status]; const evt = s => o.events.find(e=>e.s===s);
  if(r===0) return `<ul class="track">${o.events.map(e=>`<li class="done"><span class="dt"></span><span class="lb">${t('st_'+e.s)}</span><span class="t">${tdy(e.t, o.events[0].t)}</span></li>`).join('')}</ul>`;
  const fl = FLOW(o); const ci = Math.max(...fl.map((s,i)=>evt(s)?i:-1));
  if(o.status==='disputed') return `<ul class="track">${o.events.map(e=>`<li class="done"><span class="dt"></span><span class="lb">${t('st_'+e.s)}</span><span class="t">${tdy(e.t, o.events[0].t)}</span></li>`).join('')}</ul>`;
  return `<ul class="track">${fl.map((s,i)=>{ const e=evt(s); const cls = e ? 'done' : (i===ci+1 ? 'now':''); return `<li class="${cls}"><span class="dt"></span><span class="lb">${t('st_'+s)}</span><span class="t">${e?tdy(e.t, o.events[0].t):''}</span></li>`; }).join('')}</ul>`;
}
function bOrder(id){
  const o = O(id); const p = P(o.pid); const s = SELLERS[o.sid]; const r = RANK[o.status]; const rel = RELAYS[o.relay];
  let top = '';
  if(o.status==='picked' && o.mode==='home'){
    top = `<div class="codebox"><b>${t('yourCode')}</b><div class="code">${o.code.split('').map(d=>`<span>${d}</span>`).join('')}</div><p class="xs">${t('codeHint')}</p></div>`;
  } else if(o.mode==='relay' && r>=1 && r<=5){
    top = `<div class="note" style="background:#FBE9F2;color:#7a1748">${ic('bag')}<span>${t('relayWillGet')} <b>${esc(rel.name)}</b> (${esc(L(rel.addr))}). ${t('relayCodeSoon')}</span></div>`;
  } else if(o.status==='atshop'){
    top = `<div class="codebox" style="background:#FBE9F2"><b>${t('pickupCodeT')}</b><div class="code">${o.shopCode.split('').map(d=>`<span style="border-color:#B4236F;color:#B4236F">${d}</span>`).join('')}</div><p class="xs">${t('pickupCodeH')}</p>
      <div class="li" style="text-align:left"><span class="av" style="background:${rel.color}">${ic('bag')}</span><span class="mid"><span class="nm">${esc(rel.name)}</span><span class="xs mut" style="white-space:normal">${esc(L(rel.addr))} · ${t('openH')} ${rel.hours}</span></span><button class="ib" data-a="call" data-v="relay:${rel.id}">${ic('phone')}</button></div></div>`;
  } else if(o.status==='delivered'){
    const dl = o.deliveredAt + S.settings.validH*60;
    top = `<div class="card" style="border:2px solid var(--g)"><b style="font-size:16px">${t('validateT')}</b>
      <div class="btns"><button class="btn red" data-a="report-open" data-v="${o.id}">${t('reportBtn')}</button><button class="btn" data-a="validate" data-v="${o.id}">${ic('check')}${t('validateBtn')}</button></div>
      <p class="xs mut">${t('autoRelease')} <b>${hmd(dl)}</b> (${S.settings.validH} h).</p>
      <button class="btn sec sm" data-a="sim48" data-v="${o.id}">⏩ ${t('sim48')}</button></div>`;
  } else if(o.status==='disputed'){
    top = `<div class="note n-r">${ic('alert')}<span>${t('frozen')}</span></div>`;
  } else if(o.status==='completed'){
    top = `<div class="note n-g">${ic('check')}<span>${o.autoReleased ? t('autoReleased') : t('validated')}</span></div>`;
  }
  const chatOpen = S.rchats[o.id] && S.rchats[o.id].open;
  const rider = r>=4 && r<=5 ? `<div class="card"><div class="seller"><span class="av" style="background:var(--g2)">${initials(RIDER.name)}</span><div style="flex:1"><span class="xs mut">${t('riderOnWay')}</span><br><b>${RIDER.name}</b> <span class="xs mut">★ ${RIDER.rating} · ${RIDER.bike}</span></div><button class="ib" data-a="call" data-v="rider">${ic('phone')}</button></div>
     ${chatOpen ? `<button class="btn sec sm" data-a="rchat-open" data-v="${o.id}" style="width:100%">${ic('chat')}${t('riderChat')}${S.rchats[o.id].unreadB?` <span class="chip c-y">${S.rchats[o.id].unreadB}</span>`:''}</button>` : ''}</div>` : '';
  const done = o.status==='completed';
  const mine = S.reviews.find(x=>x.oid===o.id);
  const rate = done && !mine ? `<div class="card"><b>${t('writeReview')} · ${s.name}</b><div class="stars" style="justify-content:flex-start">${[1,2,3,4,5].map(n=>`<button data-a="rate" data-v="${o.id}" data-n="${n}" aria-label="${n}" style="color:${n<=(ui.input.stars||0)?'var(--y)':'#d5dbd8'}">${icFill('star')}</button>`).join('')}</div>
      <textarea class="inp" id="rev-text" rows="3" placeholder="${t('reviewPh')}">${esc(ui.input.revText||'')}</textarea>
      <button class="btn" data-a="rate-send" data-v="${o.id}" ${ui.input.stars?'':'disabled'}>${t('publishReview')}</button></div>` :
    mine ? `<div class="card"><b>${t('yourReview')}</b><span class="stars-s">${stars(mine.stars)}</span><p class="sm">${esc(L(mine.text))}</p><span class="xs mut">${t('rateThanks')}</span></div>` : '';
  return `<div class="body"><div class="ah"><button class="ib" data-a="nav" data-v="orders">${ic('back')}</button><h2>${o.id}</h2><span class="chip ${r===0||o.status==='disputed'?'c-r':done?'c-g':'c-y'}">${t('st_'+o.status)}</span></div><div class="pad">
    ${(r>=3 && r<=5) ? trackMap(o,'buyer') : ''}${top}${rider}
    ${rate}
    <div class="card">${trackList(o)}</div>
    <div class="li"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${s.name} · ${t('size')} ${esc(o.size)}</span></span></div>
    <div class="card"><div class="kv"><span>${t('item')}</span><span>${fcfa(o.price)}</span></div><div class="kv"><span>${o.mode==='relay'?t('relayDelFee'):t('delivery')+' ('+o.zone+')'}</span><span>${fcfa(o.fee)}</span></div>${o.mode==='relay'?`<div class="kv"><span>${t('relayShopFee')}<br><span class="xs">${rt('relayFeeHow').replace('{v}', fcfa(o.price))}</span></span><span>${fcfa(o.relayFee)}</span></div>`:''}<div class="kv tot"><span>${t('totalL')}</span><span>${fcfa(tot(o))}</span></div><div class="kv"><span>${t('payWith')}</span><span>${t(o.pay)}</span></div>
    ${r>0 && r<8 ? `<div class="note n-g">${ic('shield')}<span>${t('heldBy')} : <b>${fcfa(tot(o))}</b></span></div>`:''}</div>
    <button class="btn sec" data-a="chat-open" data-v="${o.pid}|Aïcha">${ic('chat')}${t('chat')} · ${s.name}</button>
    ${S.rchats[o.id] && !S.rchats[o.id].open ? `<button class="btn sec" data-a="rchat-open" data-v="${o.id}">${ic('chat')}${t('riderChat')} · ${t('chatShut')}</button>` : ''}
  </div></div>`;
}
/* ================= chat ================= */
function chatList(role){
  const sid = S.sess.seller;
  const list = Object.entries(S.chats).filter(([k,c])=> role==='buyer' ? c.buyer==='Aïcha' : P(c.pid).sid===sid);
  const rc = role==='buyer' ? Object.entries(S.rchats).map(([oid,c])=>`<button class="li" data-a="rchat-open" data-v="${oid}"><span class="av" style="background:var(--g2)">${ic('bike')}</span><span class="mid"><span class="nm">${RIDER.name} · ${oid}</span><span class="xs mut" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.msgs.length? esc(L(c.msgs[c.msgs.length-1].text)) : ''}</span></span><span class="chip ${c.open?'c-g':'c-n'}">${c.open?t('chatOpen'):t('chatShut')}</span></button>`).reverse().join('') : '';
  return `<div class="body"><div class="ah"><h2>${t('inbox')}</h2></div><div class="pad">${rc}${list.length ? list.map(([k,c])=>{ const p=P(c.pid); const last=c.msgs[c.msgs.length-1]; const other = role==='buyer'?SELLERS[p.sid].name:c.buyer;
    const pend = c.msgs.some(m=>m.type==='offer'&&m.status==='pending'&&m.from!==role);
    return `<button class="li" data-a="chat-open" data-v="${k}"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(other)}</span><span class="xs mut" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${last? (last.type==='offer'? t('offer')+' '+fcfa(last.amount) : esc(last.text||'')) : esc(L(p.name))}</span></span>${pend?`<span class="chip c-y">${t('offer')}</span>`:`<span class="xs mut">${last?hm(last.t):''}</span>`}</button>`; }).join('') : rc ? '' : `<div class="empty">${ic('chat')}${t('noChats')}</div>`}</div></div>`;
}
function rChatView(role, oid){
  const c = S.rchats[oid] || {open:false, msgs:[]}; const o = O(oid);
  if(role==='buyer') c.unreadB = 0; else c.unreadR = 0;
  const other = role==='buyer' ? RIDER.name : o.buyer;
  const msgs = c.msgs.map(m=> m.from==='sys' ? `<div class="msg sys">${esc(L(m.text))}</div>` : `<div class="msg ${m.from===role?'me':'them'}">${esc(L(m.text))}<span class="tm">${hm(m.t)}</span></div>`).join('');
  const quick = role==='buyer' ? ['rq1','rq2','rq3'] : ['dq1','dq2','dq3'];
  const back = role==='buyer' ? `data-a="go" data-s="order" data-v="${oid}"` : `data-a="go" data-s="job" data-v="${oid}"`;
  return `<div class="body" style="display:flex;flex-direction:column"><div class="ah"><button class="ib" ${back}>${ic('back')}</button><span class="av" style="background:${role==='buyer'?'var(--g2)':'var(--blue)'};width:34px;height:34px">${initials(other)}</span><h2 style="font-size:16px">${esc(other)}<br><span class="xs mut" style="font-family:var(--body);font-weight:500">${oid} · ${role==='buyer'?t('rider'):t('buyer')}</span></h2><span class="chip ${c.open?'c-g':'c-n'}">${c.open?t('chatOpen'):t('chatShut')}</span></div>
   <div class="msgs" style="flex:1">${msgs}</div>
   ${c.open ? `<div class="composer"><div class="quick">${quick.map(q=>`<button data-a="rquick" data-v="${oid}" data-q="${q}">${t(q)}</button>`).join('')}</div>
   <div class="cmp"><input id="rmsg" placeholder="${t('typeMsg')}" data-enter="rsend" data-v="${oid}"><button class="send" data-a="rsend" data-v="${oid}" aria-label="Send">${ic('send')}</button></div></div>` : `<div class="composer"><div class="note n-y">${ic('check')}<span>${t('chatClosed')}</span></div></div>`}</div>`;
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
  if(o.type==='report'){
    return `<div class="ov" data-a="ov-close"><div class="sheet" data-stop><span class="grab"></span><h3>${t('reportT')}</h3>
      ${['rNot','rSize','rDamaged','rMissing'].map(r=>`<button class="li" data-a="report-r" data-v="${r}" style="${ui.refuseR===r?'border-color:var(--red);background:var(--red-soft)':''}">${t(r)}</button>`).join('')}
      <div class="field"><label>${t('describe')}</label><textarea class="inp" id="rep-text" rows="3" placeholder="${t('describePh')}">${esc(ui.input.repText||'')}</textarea></div>
      <div class="row">${[0,1].map(i=>`<button class="doc" data-a="rep-photo" data-v="${i}" style="${(ui.input.repPh||0)>i?'border:2px solid var(--g);color:var(--g)':''}">${(ui.input.repPh||0)>i?'✓ Photo '+(i+1):'+ '+t('addPhoto')}</button>`).join('')}</div>
      <div class="note n-r">${ic('shield')}<span>${t('frozen')}</span></div>
      <button class="btn red" data-a="report-send" data-v="${o.oid}">${t('sendReport')}</button></div></div>`;
  }
  if(o.type==='loc'){
    const c = ui.input.locCity || S.city; const zs = CITIES[c].zones; const z = zs.includes(ui.input.locZone) ? ui.input.locZone : (c===S.city ? S.bzone : zs[0]);
    return `<div class="ov" data-a="ov-close"><div class="sheet" data-stop><span class="grab"></span><h3>${t('changeLoc')}</h3>
      <div class="field"><label>${t('city')}</label><div class="seg">${Object.keys(CITIES).map(x=>`<button data-a="loc-city" data-v="${x}" aria-pressed="${x===c}">${x}</button>`).join('')}</div></div>
      <div class="field"><label>${t('zone')}</label><select class="inp" id="loc-zone">${zs.map(x=>`<option ${x===z?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="note n-b">${ic('pin')}<span>${t('cityOnly')} <b>${c}</b></span></div>
      <button class="btn" data-a="loc-save">${t('save')}</button></div></div>`;
  }
  if(o.type==='boost'){
    const p = P(o.pid); const d = o.days; const pay = o.pay;
    const from = Math.max(S.clock, p.boostUntil||0);
    const opt = n => `<button class="li" data-a="boost-days" data-v="${n}" style="${d===n?'border-color:var(--amber);background:#FFF6DC':''}"><span class="av" style="background:${d===n?'var(--y)':'var(--soft)'};color:#111">${ic('bolt')}</span><span class="mid"><span class="nm">${n===1?t('day1'):n+' '+t('days')}</span><span class="xs mut">${t('boostedUntil')} ${untilL(from + n*1440)}</span></span><b>${fcfa(boostPrice(n))}</b></button>`;
    const pm = (v, label, sw) => `<button class="li" data-a="boost-pay" data-v="${v}" style="${pay===v?'border-color:var(--g);background:var(--g-soft)':''}"><span class="av" style="background:${sw};color:${v==='momo'?'#111':'#fff'};font-size:11px">${v==='momo'?'MTN':'OM'}</span><span class="mid"><span class="nm">${label}</span><span class="xs mut">+237 ${SELLERS[p.sid].phone}</span></span>${pay===v?ic('check'):''}</button>`;
    return `<div class="ov" data-a="ov-close"><div class="sheet" data-stop><span class="grab"></span><h3>${t('boostT')}</h3>
      <div class="li" style="border:0;padding:0"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="b">${fcfa(p.price)}</span></span></div>
      <p class="sm mut">${t('boostS')}</p>
      <div class="field"><label>${t('duration')}</label><div style="display:grid;gap:8px">${BOOST_DAYS.map(opt).join('')}</div></div>
      <div class="field"><label>${t('payWith')}</label><div style="display:grid;gap:8px">${pm('momo',t('momo'),'var(--mtn)')}${pm('om',t('om'),'var(--orange)')}</div></div>
      <button class="btn" data-a="boost-go" data-v="${p.id}">${ic('bolt')}${t('boostPay')} · ${fcfa(boostPrice(d))}</button></div></div>`;
  }
  if(o.type==='edit'){
    const p = P(o.pid);
    return `<div class="ov" data-a="ov-close"><div class="sheet" data-stop><span class="grab"></span><h3>${t('editPrice')}</h3><p class="sm mut">${esc(L(p.name))}</p><div class="cc"><input class="inp" id="edit-price" inputmode="numeric" value="${p.price}" style="font:800 22px/1 var(--disp)" data-autofocus><span class="pre">FCFA</span></div><button class="btn" data-a="edit-save" data-v="${p.id}">${t('save')}</button></div></div>`;
  }
  return '';
}

/* ================= profile ================= */
function profile(role){
  const who = role==='buyer' ? {n:BUYER.name, s:`+237 ${BUYER.phone} · ${S.bzone}, ${S.city}`, c:'var(--blue)'} : role==='rider' ? {n:RIDER.name, s:`+237 ${RIDER.phone} · ★ ${RIDER.rating}`, c:'var(--g2)'} : (x=>({n:x.name, s:`${t(x.type)} · ${x.zone} · ★ ${x.rating}`, c:x.color}))(SELLERS[S.sess.seller]);
  return `<div class="body"><div class="ah"><h2>${t('profile')}</h2></div><div class="pad">
   <div class="card"><div class="seller"><span class="av" style="background:${who.c};width:52px;height:52px;font-size:18px">${initials(who.n)}</span><div style="flex:1"><b style="font-size:16px">${esc(who.n)}</b><div class="xs mut">${esc(who.s)}</div></div>${role!=='buyer'?`<span class="chip c-g">${ic('shield')}${t('verified')}</span>`:''}</div></div>
   <div class="card"><div class="row sb"><span class="row">${ic('globe')}<b>${t('language')}</b></span><div class="seg"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">Français</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">English</button></div></div></div>
   ${role==='buyer'?`<button class="li" data-a="loc-open">${ic('pin')}<span class="mid"><span class="nm">${t('location')}</span><span class="xs mut">${S.bzone}, ${S.city}</span></span><span class="chip c-n">${t('changeLoc')}</span></button>`:''}
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
  // The seller always receives 100% of the item price: Grendi's fee and delivery are paid by the buyer.
  let held=0, frozen=0, paid=148500;
  S.orders.filter(o=>o.sid===sid).forEach(o=>{ const r=RANK[o.status]; if(o.status==='completed') paid += o.price; else if(o.status==='disputed') frozen += o.price; else if(r>0) held += o.price; });
  return {held, frozen, paid};
}
function sDash(){
  const sid = S.sess.seller; const s = SELLERS[sid]; const m = sellerMoney(sid);
  const mine = S.orders.filter(o=>o.sid===sid).slice().reverse();
  const active = mine.filter(o=>RANK[o.status]>0 && RANK[o.status]<8);
  const done = mine.filter(o=>!(RANK[o.status]>0 && RANK[o.status]<8)).slice(0,4);
  const dOrd = demoOrder(); const other = dOrd && dOrd.sid!==sid && RANK[dOrd.status]>0 && RANK[dOrd.status]<8 ? SELLERS[dOrd.sid] : null;
  const sw = other ? `<div class="note n-y">${ic('bell')}<span style="flex:1">${dOrd.id} → <b>${other.name}</b></span><button class="btn sm" data-a="switch-shop" data-v="${other.id}">${S.lang==='fr'?'Ouvrir cette boutique':'Open this shop'}</button></div>` : '';
  return `<div class="body"><div class="ah"><span class="av" style="background:${s.color};width:38px;height:38px">${initials(s.name)}</span><h2>${s.name}<br><span class="xs mut" style="font-family:var(--body);font-weight:500">${t(s.type)} · ${s.zone}</span></h2><span class="chip c-g">${ic('shield')}${t('verified')}</span></div><div class="pad">${sw}
    <div class="stats"><div class="stat"><span>${t('inEscrow')}</span><b>${fcfa(m.held)}</b></div><div class="stat"><span>${t('paidOut')}</span><b>${fcfa(m.paid)}</b></div><div class="stat"><span>${t('frozenL')}</span><b style="${m.frozen?'color:var(--red)':''}">${fcfa(m.frozen)}</b></div><div class="stat"><span>${t('liveListings')}</span><b>${S.products.filter(p=>p.sid===sid&&p.status==='live').length}</b></div></div>
    <div class="note n-g">${ic('check')}<span>${t('sellerFree')}</span></div>
    <div class="note n-y" style="flex-wrap:wrap">${ic('bolt')}<span style="flex:1;min-width:160px">${t('boostCta')}</span><button class="btn y sm" data-a="nav" data-v="listings">${t('boost')}</button></div>
    <h3 style="font-size:16px">${t('activeOrders')}</h3>
    ${active.length? active.map(o=>orderRow(o,'order', o.status==='placed'?' · '+t('newOrder'):'')).join('') : `<div class="empty">${ic('bag')}${t('noOrders')}</div>`}
    ${done.length?`<h3 style="font-size:16px">${t('orders')}</h3>${done.map(o=>orderRow(o,'order')).join('')}`:''}
    ${reviewsBlock(sid, 4)}
  </div></div>`;
}
function sOrder(id){
  const o = O(id); const p = P(o.pid);
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
  } else if(o.status==='atshop'){
    act = `<div class="note" style="background:#FBE9F2;color:#7a1748">${ic('bag')}<span>${t('st_atshop')} : <b>${esc(RELAYS[o.relay].name)}</b></span></div><div class="note n-y">${ic('shield')}<span>${t('awaiting')}</span></div>`;
  } else if(o.status==='delivered'){
    act = `<div class="note n-y">${ic('shield')}<span>${t('sellerWait')} <b>${hmd(o.deliveredAt + S.settings.validH*60)}</b>.</span></div>`;
  } else if(o.status==='disputed'){
    const d = S.disputes.find(x=>x.oid===o.id);
    act = `<div class="note n-r">${ic('alert')}<span>${t('sellerFrozen')}${d?`<br><b>${t(d.reason)}</b> · « ${esc(L(d.claim))} »`:''}</span></div>`;
  } else if(o.status==='completed'){
    act = `<div class="note n-g">${ic('coins')}<span>${t('paidTo')} MTN MoMo +237 ${SELLERS[o.sid].phone} : <b>${fcfa(o.price)}</b>${o.autoReleased?' · '+t('autoReleased'):''}</span></div>`;
  }
  return `<div class="body"><div class="ah"><button class="ib" data-a="nav" data-v="dash">${ic('back')}</button><h2>${o.id}</h2><span class="chip ${RANK[o.status]===0?'c-r':o.status==='completed'?'c-g':'c-y'}">${t('st_'+o.status)}</span></div><div class="pad">
    <div class="li"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${t('size')} ${esc(o.size)} · ${o.buyer} · ${o.zone}</span></span></div>
    ${act}
    <div class="card"><div class="kv"><span>${t('price')}</span><span>${fcfa(o.price)}</span></div><div class="kv"><span>${t('sellerFeesL')}<br><span class="xs">${t('paidByBuyer')}</span></span><span>0 FCFA</span></div><div class="divider"></div><div class="kv tot"><span>${t('youGet')}</span><span>${fcfa(o.price)}</span></div><div class="kv"><span>${t('payWith')}</span><span>${t(o.pay)}</span></div></div>
    <div class="note n-g">${ic('check')}<span>${t('sellerFree')}</span></div>
    <div class="card">${trackList(o)}</div>
  </div></div>`;
}
function sListings(){
  const sid = S.sess.seller; const mine = S.products.filter(p=>p.sid===sid);
  return `<div class="body"><div class="ah"><h2>${t('listings')}</h2><button class="btn sm" data-a="nav" data-v="add">${ic('plus')}${t('sell')}</button></div><div class="pad">
   <div class="note n-y">${ic('bolt')}<span>${t('boostS')}</span></div>
   ${mine.map(p=>`<div class="li" style="align-items:flex-start"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="b">${fcfa(p.price)}</span><span class="xs mut">${p.views} ${t('views')} · ${p.sizes.join(', ')}</span>${boosted(p)?`<span class="xs" style="color:var(--amber)">${t('boostedUntil')} <b>${untilL(p.boostUntil)}</b></span>`:''}</span><span style="display:grid;gap:6px;justify-items:end"><span class="chip ${p.status==='live'?'c-g':p.status==='pending'?'c-y':'c-n'}">${t(p.status==='live'?'live':p.status==='pending'?'underReview':'sold')}</span>${boosted(p)?sponsoredChip():''}${p.status==='live'?`<button class="btn y sm" data-a="boost-open" data-v="${p.id}">${ic('bolt')}${boosted(p)?t('boostExtend'):t('boost')}</button>`:''}${p.status!=='sold'?`<button class="btn sec sm" data-a="edit-open" data-v="${p.id}">${t('editPrice')}</button>`:''}</span></div>`).join('')}
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
  else if(n.s==='rchat') body = rChatView('rider', n.id);
  else if(n.s==='earn') body = rEarn();
  else body = profile('rider');
  return body + overlay() + tabs('rider',[['home',t('jobs'),'bike'],['earn',t('earnings'),'coins'],['profile',t('profile'),'user']]);
}
function rHome(){
  const r = S.rider;
  const all = S.orders.filter(o=>o.status==='ready');
  const jobs = all.filter(o=>sellerCity(o.sid)===r.city);
  const other = all.filter(o=>sellerCity(o.sid)!==r.city);
  const active = S.orders.filter(o=>o.demo && (o.status==='assigned'||o.status==='picked'));
  const oc = other.length ? sellerCity(other[0].sid) : null;
  return `<div class="body"><div class="ah"><span class="av" style="background:var(--g2);width:38px;height:38px">${initials(RIDER.name)}</span><h2>${RIDER.name}<br><span class="xs mut" style="font-family:var(--body);font-weight:500">${RIDER.bike} · ${r.city}</span></h2></div><div class="pad">
    <div class="toggle"><span><b>${r.online?t('online'):t('offline')}</b><br><span class="xs mut">${t('onlineS')}</span></span><button class="sw" data-a="online" aria-pressed="${r.online}" aria-label="${t('online')}"></button></div>
    <div class="field"><label>${t('workCity')}</label><div class="seg">${Object.keys(CITIES).map(c=>`<button data-a="rider-city" data-v="${c}" aria-pressed="${r.city===c}">${c}</button>`).join('')}</div></div>
    <div class="stats"><div class="stat"><span>${t('todayEarn')}</span><b>${fcfa(r.earnedToday)}</b></div><div class="stat"><span>${t('deliveries')}</span><b>${r.trips}</b></div></div>
    ${oc && !active.length ? `<div class="note n-y">${ic('bike')}<span style="flex:1">${other.length} ${t('jobsOther')} <b>${oc}</b></span><button class="btn sm" data-a="rider-city" data-v="${oc}">${t('switchCity')} ${oc}</button></div>` : ''}
    ${active.map(o=>`<button class="li" data-a="go" data-s="job" data-v="${o.id}" style="border-color:var(--g)"><span class="av" style="background:var(--g)">${ic('bike')}</span><span class="mid"><span class="nm">${o.id} · ${t('st_'+o.status)}</span><span class="xs mut">${SELLERS[o.sid].zone} → ${o.mode==='relay'?RELAYS[o.relay].name:o.zone}</span></span>${ic('back','')}</button>`).join('')}
    ${!r.online ? `<div class="empty">${ic('bike')}${t('offline')}</div>` : jobs.length ? jobs.map(o=>{ const s=SELLERS[o.sid]; const dest = o.mode==='relay' ? `<b>${esc(RELAYS[o.relay].name)}</b> · ${RELAYS[o.relay].zone}` : `<b>${o.buyer}</b> · ${o.zone}`; return `<div class="job"><div class="row sb"><b style="font-size:16px">${t('newJob')}</b><span class="chip c-y">${fcfa(o.riderFee)}</span></div><div class="ring"><i></i></div>
      <div class="route"><i style="background:var(--y)"></i><span><span class="xs" style="color:#9fb3aa">${t('pickup')}</span><br><b>${s.name}</b> · ${s.zone}</span><span class="ln"></span><span></span><i style="background:${o.mode==='relay'?'#E26AA6':'var(--g2)'}"></i><span><span class="xs" style="color:#9fb3aa">${o.mode==='relay'?t('toRelayL'):t('dropoff')}</span><br>${dest}</span></div>
      <div class="row sb sm"><span style="color:#9fb3aa">≈ 6,4 km · 22 ${t('minutes')}</span><span>${t(o.pay)} ✓</span></div>
      <button class="btn y" data-a="r-accept" data-v="${o.id}">${t('acceptJob')}</button></div>`; }).join('') : !active.length ? `<div class="empty">${ic('bike')}${t('noJobs')}</div>` : ''}
  </div></div>`;
}
function rJob(id){
  const o = O(id); const s = SELLERS[o.sid]; const rel = RELAYS[o.relay];
  const atSeller = o.status==='assigned';
  const map = trackMap(o,'rider');
  const c = S.rchats[o.id];
  const chatBtn = c && c.open ? `<button class="btn sec" data-a="rchat-open" data-v="${o.id}">${ic('chat')}${t('buyerChat')}${c.unreadR?` <span class="chip c-y">${c.unreadR}</span>`:''}</button>` : '';
  let body;
  if(atSeller){
    body = `<div class="card"><span class="xs mut">${t('goSeller')}</span><div class="seller"><span class="av" style="background:${s.color}">${initials(s.name)}</span><div style="flex:1"><b>${s.name}</b><div class="xs mut">${s.zone} · ${S.lang==='fr'?'entrée principale':'main entrance'}</div></div><button class="ib" data-a="call" data-v="${s.id}">${ic('phone')}</button></div></div>
      <div class="codebox"><b>${t('showCode')}</b><div class="code">${o.pickup.split('').map(d=>`<span>${d}</span>`).join('')}</div><p class="xs">${t('waitSellerCode')}</p></div>${chatBtn}`;
  } else if(o.status==='picked' && o.mode==='relay'){
    body = `<div class="card"><span class="xs mut">${t('toRelay')}</span><div class="seller"><span class="av" style="background:${rel.color}">${ic('bag')}</span><div style="flex:1"><b>${esc(rel.name)}</b><div class="xs mut">${esc(L(rel.addr))} · ${rel.hours}</div></div><button class="ib" data-a="call" data-v="relay:${rel.id}">${ic('phone')}</button></div></div>
      <div class="note n-g">${ic('shield')}<span>${t(o.pay)} ✓ · ${t('heldBy')}</span></div>
      ${chatBtn}
      <p class="xs mut">${t('relayAtShopPaid')}</p>
      <button class="btn" data-a="r-drop" data-v="${id}">${ic('bag')}${t('dropBtn')}</button>`;
  } else if(o.status==='picked'){
    body = `<div class="card"><span class="xs mut">${t('goBuyer')}</span><div class="seller"><span class="av" style="background:var(--blue)">${initials(o.buyer)}</span><div style="flex:1"><b>${o.buyer}</b><div class="xs mut">${o.zone} · ${esc(o.landmark)}</div></div><button class="ib" data-a="call" data-v="buyer">${ic('phone')}</button></div></div>
      ${chatBtn}
      <div class="note n-g">${ic('shield')}<span>${t(o.pay)} ✓ · ${t('heldBy')}</span></div>
      <div class="card"><div class="field"><label>${t('enterDelivery')}</label><input class="inp" id="dl-code" inputmode="numeric" maxlength="4" placeholder="••••" style="font:800 24px/1 var(--disp);letter-spacing:.3em;text-align:center" ${S.rider.noData?'disabled':''}></div><p class="xs mut">${t('deliveryHint')}</p>${ui.err?`<p class="xs" style="color:var(--red)">${t('wrongCode')}</p>`:''}
      ${S.rider.noData ? `<button class="btn y" data-a="sms-open" data-v="${id}">${ic('chat')}${t('smsFallback')}</button>` : `<button class="btn" data-a="r-deliver" data-v="${id}">${t('confirmDel')}</button>`}</div>
      <div class="toggle"><span><b>${t('noData')}</b><br><span class="xs mut">${t('smsFallback')}</span></span><button class="sw" data-a="nodata" aria-pressed="${S.rider.noData}" aria-label="${t('noData')}"></button></div>
      <button class="btn red" data-a="refuse-open" data-v="${id}">${t('refusedBtn')}</button>`;
  } else {
    const earned = RANK[o.status]>=6;
    body = `<div class="empty">${ic(earned?'check':'alert')}<h3>${earned?t('delivered'):t('st_'+o.status)}</h3>${earned?`<p><b>${fcfa(o.riderFee)}</b> ${t('earned')}</p>`:''}${c?`<p class="xs">${t('chatClosed')}</p>`:''}<button class="btn sm" data-a="nav" data-v="home">${t('jobs')}</button></div>`;
  }
  return `<div class="body"><div class="ah"><button class="ib" data-a="nav" data-v="home">${ic('back')}</button><h2>${o.id}</h2><span class="chip c-y">${fcfa(o.riderFee)}</span></div><div class="pad">${map}${body}</div></div>`;
}
function rEarn(){
  const r = S.rider; const mine = S.orders.filter(o=>RANK[o.status]>=6 || o.status==='disputed').slice().reverse();
  return `<div class="body"><div class="ah"><h2>${t('earnings')}</h2></div><div class="pad">
    <div class="stats"><div class="stat"><span>${t('todayEarn')}</span><b>${fcfa(r.earnedToday)}</b></div><div class="stat"><span>${t('deliveries')}</span><b>${r.trips}</b></div></div>
    ${mine.map(o=>`<div class="li"><span class="av" style="background:var(--g-soft);color:var(--g)">${ic('check')}</span><span class="mid"><span class="nm">${o.id} · ${SELLERS[o.sid].zone} → ${o.mode==='relay'?t('relayFeeL'):o.zone}</span><span class="xs mut">${hm(o.events.find(e=>e.s==='delivered'||e.s==='atshop')?.t ?? o.events[o.events.length-1].t)}</span></span><b>+${fcfa(o.riderFee)}</b></div>`).join('')}
  </div></div>`;
}
/* ================= pickup shop (point relais) ================= */
function relayApp(){
  const n = S.nav.relay;
  const body = n.s==='profile' ? relayProfile() : rlHome();
  const held = S.orders.filter(o=>o.relay===S.sess.relay && o.status==='atshop').length;
  return body + overlay() + tabs('relay',[['home',t('parcels'),'bag',held],['profile',t('profile'),'user']]);
}
function relayProfile(){
  const r = RELAYS[S.sess.relay];
  return `<div class="body"><div class="ah"><h2>${t('profile')}</h2></div><div class="pad">
   <div class="card"><div class="seller"><span class="av" style="background:${r.color};width:52px;height:52px;font-size:18px">${initials(r.name)}</span><div style="flex:1"><b style="font-size:16px">${esc(r.name)}</b><div class="xs mut">${esc(r.owner)} · ${r.zone}, ${cityOf(r.zone)} · ${r.hours}</div></div><span class="chip c-g">${ic('shield')}${t('verified')}</span></div></div>
   <div class="card"><div class="row sb"><span class="row">${ic('globe')}<b>${t('language')}</b></span><div class="seg"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">Français</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">English</button></div></div></div>
   <button class="btn sec" data-a="logout">${ic('out')}${t('logout')}</button></div></div>`;
}
function rlHome(){
  const id = S.sess.relay; const r = RELAYS[id];
  const mine = S.orders.filter(o=>o.relay===id);
  const incoming = mine.filter(o=>['placed','confirmed','ready','assigned','picked'].includes(o.status));
  const held = mine.filter(o=>o.status==='atshop');
  const done = mine.filter(o=>RANK[o.status]>=7 || o.status==='disputed');
  const dOrd = demoOrder(); const other = dOrd && dOrd.mode==='relay' && dOrd.relay!==id && RANK[dOrd.status]>0 && RANK[dOrd.status]<7 ? RELAYS[dOrd.relay] : null;
  const sw = other ? `<div class="note n-y">${ic('bell')}<span style="flex:1">${dOrd.id} → <b>${esc(other.name)}</b></span><button class="btn sm" data-a="switch-relay" data-v="${other.id}">${S.lang==='fr'?'Ouvrir cette boutique':'Open this shop'}</button></div>` : '';
  const row = (o, extra) => { const p=P(o.pid); return `<div class="card"><div class="li" style="border:0;padding:0"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${o.id} · ${esc(o.buyer)}</span><span class="xs mut">${esc(L(p.name))}</span><span><span class="chip ${o.status==='atshop'?'c-y':RANK[o.status]>=7?'c-g':'c-n'}">${t('st_'+o.status)}</span></span></span><span style="text-align:right"><b class="sm" style="color:#B4236F">+${fcfa(o.relayFee)}</b>${o.status==='atshop'||RANK[o.status]<6?`<br><span class="xs mut">${t('heldTillPickup')}</span>`:''}</span></div>${extra||''}</div>`; };
  return `<div class="body"><div class="ah"><span class="av" style="background:${r.color};width:38px;height:38px">${ic('bag')}</span><h2>${esc(r.name)}<br><span class="xs mut" style="font-family:var(--body);font-weight:500">${r.zone}, ${cityOf(r.zone)} · ${r.hours}</span></h2></div><div class="pad">${sw}
    <div class="stats"><div class="stat"><span>${t('pendingPickup')}</span><b>${fcfa(held.reduce((a,o)=>a+o.relayFee,0))}</b></div><div class="stat"><span>${t('relayEarn')}</span><b>${fcfa(S.relayEarn[id]||0)}</b></div></div>
    <div class="note" style="background:#FBE9F2;color:#7a1748">${ic('coins')}<span>${rt('relayFormula')}<br><b>${rt('relayExample')}</b></span></div>
    <h3 style="font-size:16px">${t('inStore')} (${held.length})</h3>
    ${held.length ? held.map(o=>row(o, `<div class="field"><label>${t('clientCode')}</label><input class="inp" id="sc-${o.id}" inputmode="numeric" maxlength="4" placeholder="••••" style="font:800 22px/1 var(--disp);letter-spacing:.3em;text-align:center"></div>${ui.err===o.id?`<p class="xs" style="color:var(--red)">${t('wrongCode')}</p>`:''}<button class="btn" data-a="rl-hand" data-v="${o.id}">${t('handBtn')}</button>`)).join('') : `<p class="sm mut">${t('none')}</p>`}
    <h3 style="font-size:16px">${t('toReceive')} (${incoming.length})</h3>
    ${incoming.length ? incoming.map(o=>row(o, o.status==='picked' ? `<div class="xs mut"><span class="gps"></span> ${RIDER.name} · <span data-trk-eta="${o.id}"></span></div>` : '')).join('') : `<p class="sm mut">${t('none')}</p>`}
    ${done.length ? `<h3 style="font-size:16px">${t('handedOver')}</h3>${done.slice().reverse().map(o=>row(o)).join('')}` : ''}
  </div></div>`;
}

/* ================= admin ================= */
function adminApp(){
  const n = S.nav.admin.s;
  const pv = S.apps.filter(a=>a.status==='pending').length + S.products.filter(p=>p.status==='pending').length;
  const pd = S.disputes.filter(d=>d.status==='open').length;
  const nav = [['overview',t('overview')],['orders',t('aOrders')],['verify',t('aVerify'),pv],['payments',t('aPayments')],['disputes',t('aDisputes'),pd],['live',t('liveMap')],['relays',t('aRelays')],['riders',t('aRiders')],['settings',t('aSettings')]];
  const views = {overview:aOverview, orders:aOrders, verify:aVerify, payments:aPayments, disputes:aDisputes, live:aLive, relays:aRelays, riders:aRiders, settings:aSettings};
  return `<div class="admin"><nav class="anav"><div class="brand"><span class="logo">g</span>Grendi Ops</div>${nav.map(([k,l,c])=>`<button data-a="nav" data-v="${k}" aria-current="${n===k}">${l}${c?`<span class="cnt">${c}</span>`:''}</button>`).join('')}
    <div class="who"><span>${t('loggedAs')}</span><b style="color:#fff">ops@grendi.cm</b><div class="lang" style="justify-self:start"><button data-a="lang" data-v="fr" aria-pressed="${S.lang==='fr'}">FR</button><button data-a="lang" data-v="en" aria-pressed="${S.lang==='en'}">EN</button></div><button class="ghost" data-a="logout" style="justify-self:start">${t('logout')}</button></div></nav>
    <div class="acont">${ui.adminFlash?`<div class="note n-g">${ic('check')}<span>${esc(ui.adminFlash)}</span></div>`:''}${views[n]()}</div></div>`;
}
function stChip(o){ const r=RANK[o.status]; return `<span class="chip ${r===0||o.status==='disputed'?'c-r':o.status==='completed'?'c-g':'c-y'}">${t('st_'+o.status)}</span>`; }
function aRelays(){
  const rows = Object.values(RELAYS).map(r=>{ const held = S.orders.filter(o=>o.relay===r.id && o.status==='atshop').length; return `<tr><td><b>${esc(r.name)}</b><br><span class="xs mut">${esc(r.owner)} · +237 ${r.phone}</span></td><td>${r.zone}, ${cityOf(r.zone)}</td><td>${r.hours}</td><td class="num">${held}</td><td class="num">${fcfa(S.orders.filter(o=>o.relay===r.id && o.status==='atshop').reduce((a,o)=>a+o.relayFee,0))}</td><td class="num">${fcfa(S.relayEarn[r.id]||0)}</td></tr>`; }).join('');
  return `<h2>${t('aRelays')}</h2><p class="mut">${rt('relayFormula')}</p><div class="tw"><table><thead><tr><th>${t('relay')}</th><th>${t('zoneL')}</th><th>${t('openH')}</th><th class="num">${t('heldNow')}</th><th class="num">${t('pendingPickup')}</th><th class="num">${t('relayEarn')}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}
function aOverview(){
  const today = S.orders; const gmv = today.reduce((a,o)=>a+(RANK[o.status]>0?o.price:0),0);
  const held = today.filter(o=>RANK[o.status]>0&&o.status!=='completed').reduce((a,o)=>a+tot(o),0);
  const awaiting = today.filter(o=>o.status==='delivered'||o.status==='atshop').length;
  const fin = today.filter(o=>o.events.some(e=>e.s==='delivered')); const avg = fin.length ? fin.reduce((a,o)=>a+(o.events.find(e=>e.s==='delivered').t-o.events[0].t),0)/fin.length : 0;
  const feed = today.flatMap(o=>o.events.map(e=>({o,e}))).sort((a,b)=>b.e.t-a.e.t).slice(0,8);
  return `<h2>${t('overview')}</h2><div class="kpis">
    <div class="kpi"><span>${t('ordersToday')}</span><b>${today.length}</b></div><div class="kpi"><span>${t('gmv')}</span><b>${fcfa(gmv)}</b></div><div class="kpi"><span>${t('escrowHeld')}</span><b>${fcfa(held)}</b></div>
    <div class="kpi"><span>${t('kpiAwait')}</span><b>${awaiting}</b></div><div class="kpi"><span>${t('avgTime')}</span><b>${dur(avg)}</b></div><div class="kpi"><span>${t('openDisputes')}</span><b>${S.disputes.filter(d=>d.status==='open').length}</b></div>
    <div class="kpi"><span>${t('boostRev')}</span><b>${fcfa((S.boosts||[]).reduce((a,b)=>a+b.amount,0))}</b></div></div>
    <h3>${t('liveFeed')}</h3><div class="tw"><table><thead><tr><th>${t('time')}</th><th>${t('order')}</th><th>${t('status')}</th><th>${t('sellerL')}</th><th class="num">${t('amount')}</th></tr></thead><tbody>
    ${feed.map(({o,e})=>`<tr><td>${hmd(e.t)}</td><td><b>${o.id}</b>${o.demo?' <span class="chip c-b">demo</span>':''}</td><td>${t('st_'+e.s)}</td><td>${SELLERS[o.sid].name}</td><td class="num">${fcfa(tot(o))}</td></tr>`).join('')}</tbody></table></div>`;
}
function aOrders(){
  return `<h2>${t('aOrders')}</h2><div class="tw"><table><thead><tr><th>${t('order')}</th><th>${t('item')}</th><th>${t('buyerL')}</th><th>${t('sellerL')}</th><th>${t('deliveryMode')}</th><th>${t('status')}</th><th class="num">${t('amount')}</th></tr></thead><tbody>
  ${S.orders.slice().reverse().map(o=>`<tr><td><b>${o.id}</b><br><span class="xs mut">${hmd(o.events[0].t)}</span></td><td>${esc(L(P(o.pid).name))}</td><td>${esc(o.buyer)}<br><span class="xs mut">${o.zone}, ${cityOf(o.zone)}</span></td><td>${SELLERS[o.sid].name}</td><td>${o.mode==='relay'?esc(RELAYS[o.relay].name):t('homeDel')}</td><td>${stChip(o)}</td><td class="num">${fcfa(tot(o))}</td></tr>`).join('')}</tbody></table></div>`;
}
function aVerify(){
  const apps = S.apps.map(a=>`<div class="card"><div class="row sb"><span class="chip ${a.type==='seller'?'c-a':'c-g'}">${t(a.type==='seller'?'sellerApp':'riderApp')}</span><span class="xs mut">${hm(a.t)}</span></div><b style="font-size:16px">${esc(a.name)}</b><span class="sm mut">${esc(a.owner)} · ${a.zone}</span>
    <div class="field"><label>${t('docs')}</label><div class="docs">${a.docs.map(d=>`<span class="doc">${d}</span>`).join('')}</div></div><div class="kv"><span>${t('momoCheck')}</span><span class="b" style="color:var(--g)">✓ ${t('checked')}</span></div>
    ${a.status==='pending'?`<div class="btns"><button class="btn red sm" data-a="app" data-v="${a.id}" data-k="rejected">${t('reject')}</button><button class="btn sm" data-a="app" data-v="${a.id}" data-k="approved">${t('approve')}</button></div>`:`<span class="chip ${a.status==='approved'?'c-g':'c-r'}">${t(a.status)}</span>`}</div>`).join('');
  const pend = S.products.filter(p=>p.status==='pending');
  return `<h2>${t('aVerify')}</h2><div class="acards">${apps}</div><h3>${t('reviewListing')}</h3>${pend.length?`<div class="acards">${pend.map(p=>`<div class="card"><div class="li" style="border:0;padding:0"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${SELLERS[p.sid].name}</span><b>${fcfa(p.price)}</b></span></div><div class="btns"><button class="btn red sm" data-a="lst" data-v="${p.id}" data-k="rejected">${t('reject')}</button><button class="btn sm" data-a="lst" data-v="${p.id}" data-k="live">${t('approve')}</button></div></div>`).join('')}</div>`:`<p class="mut">${t('none')}</p>`}`;
}
function aPayments(){
  const rows = S.orders.slice().reverse().map(o=>{ const st=o.status; const state = st==='completed'?['released','c-g'] : (st==='refunded'||st==='refused'||st==='cancelled')?['refunded','c-r'] : st==='disputed'?['frozenSt','c-r'] : (st==='delivered'||st==='atshop')?['awaiting','c-y'] : ['held','c-y'];
    const paid = st==='completed'; const riderPaid = RANK[st]>=6 || st==='disputed';
    return `<tr><td><b>${o.id}</b></td><td>${t(o.pay)}</td><td class="num">${fcfa(tot(o))}</td><td><span class="chip ${state[1]}">${t(state[0])}</span></td><td class="num">${paid?fcfa(o.price):'—'}</td><td class="num">${riderPaid?fcfa(o.riderFee):'—'}</td><td class="num">${o.mode==='relay' ? (RANK[st]>=7 || st==='disputed' ? fcfa(o.relayFee) : (RANK[st]>0 ? `<span class="mut">${fcfa(o.relayFee)}<br><span class="xs">${t('heldTillPickup')}</span></span>` : '—')) : '—'}</td></tr>`; }).join('');
  const bRows = (S.boosts||[]).slice().reverse().map(b=>`<tr><td>${hmd(b.t)}</td><td>${SELLERS[b.sid].name}</td><td>${esc(L(P(b.pid)?.name)||b.pid)}</td><td>${b.days===1?t('day1'):b.days+' '+t('days')}</td><td>${t(b.pay)}</td><td class="num">${fcfa(b.amount)}</td></tr>`).join('');
  return `<h2>${t('ledger')}</h2><p class="mut">${t('lg1')}. ${t('sellerFreeA')}</p><div class="tw"><table><thead><tr><th>${t('order')}</th><th>${t('payWith')}</th><th class="num">${t('amount')}</th><th>${t('status')}</th><th class="num">${t('toSeller')}</th><th class="num">${t('toRider')}</th><th class="num">${t('toRelayL')}</th></tr></thead><tbody>${rows}</tbody></table></div>
    <h3>${t('boostsL')}</h3><div class="tw"><table><thead><tr><th>${t('time')}</th><th>${t('sellerL')}</th><th>${t('item')}</th><th>${t('duration')}</th><th>${t('payWith')}</th><th class="num">${t('amount')}</th></tr></thead><tbody>${bRows || `<tr><td colspan="6" class="mut">${t('none')}</td></tr>`}</tbody></table></div>`;
}
function aDisputes(){
  return `<h2>${t('aDisputes')}</h2>${S.disputes.map(d=>{ const o=O(d.oid); const p=P(o.pid); return `<div class="card" style="max-width:640px"><div class="row sb"><b>${t('dispute')} · ${o.id}</b>${d.status==='open'?`<span class="chip c-r">${t('st_disputed')}</span>`:`<span class="chip c-g">${t('resolved')} · ${t(d.result)}</span>`}</div>
    <div class="li" style="border:0;padding:0"><span class="th">${photo(p.img,L(p.name),160)}</span><span class="mid"><span class="nm">${esc(L(p.name))}</span><span class="xs mut">${o.buyer} ↔ ${SELLERS[o.sid].name} · ${fcfa(tot(o))}</span></span></div>
    <div class="kv"><span>${t('claim')}</span><span>${t(d.reason)}</span></div><p class="sm" style="font-style:italic">${esc(L(d.claim))}</p><div class="field"><label>${t('evidence')}</label><div class="docs">${Array.from({length:d.photos??2},(_, i)=>`<span class="doc">Photo ${i+1}</span>`).join('')}<span class="doc">Chat</span><span class="doc">${S.lang==='fr'?'Annonce':'Listing'}</span></div></div><div class="note n-r">${ic('shield')}<span>${t('frozenSt')} : <b>${fcfa(o.price)}</b></span></div>
    ${d.status==='open'?`<div class="btns"><button class="btn sec sm" data-a="disp" data-v="${d.id}" data-k="released">${t('releaseSeller')}</button><button class="btn sm" data-a="disp" data-v="${d.id}" data-k="refunded">${t('refundBuyer')}</button></div>`:''}</div>`; }).join('')}`;
}
function aRiders(){
  const busy = S.orders.some(o=>o.status==='assigned'||o.status==='picked');
  const rs = [[RIDER.name,'Akwa → Bonamoussadi',RIDER.rating,S.rider.online?(busy?'busy':'online'):'offline'],['Didier Mbappé','Deïdo',4.8,'online'],['Clovis Etoundi','Makepe',4.6,'online'],['Rodrigue Nkoulou','Bonabéri',4.9,'busy'],['Hervé Kamdem','Logbaba',4.7,'online'],['Blaise Owono','Mokolo, Yaoundé',4.8,'online'],['Yves Mbarga','Bastos, Yaoundé',4.6,'busy']];
  return `<h2>${t('aRiders')}</h2><div class="tw"><table><thead><tr><th>${t('rider')}</th><th>${t('zoneL')}</th><th>${t('rating')}</th><th>${t('state')}</th></tr></thead><tbody>${rs.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>★ ${r[2]}</td><td><span class="chip ${r[3]==='online'?'c-g':r[3]==='busy'?'c-y':'c-n'}">${t(r[3])}</span></td></tr>`).join('')}</tbody></table></div>`;
}
function aSettings(){
  const s = S.settings;
  const feeRows = c => CITIES[c].zones.map(z=>`<tr><td>${z}</td><td class="num"><input class="inp" id="fee-${z}" inputmode="numeric" value="${s.fees[z]}" data-a="fee" data-k="${z}" style="width:96px;text-align:right"></td><td class="num"><input class="inp" id="sfee-${z}" inputmode="numeric" value="${sfee(z)}" data-a="sfee" data-k="${z}" style="width:96px;text-align:right"></td></tr>`).join('');
  return `<h2>${t('aSettings')}</h2><p class="mut">${t('settingsNote')}</p><div class="card" style="max-width:640px">
    <p class="sm mut">${t('sellerFreeA')}</p>
    ${BOOST_DAYS.map(d=>`<div class="set"><b>${t('boostPrice')} · ${d===1?t('day1'):d+' '+t('days')}</b><input class="inp" id="set-boost${d}" inputmode="numeric" value="${boostPrice(d)}" data-a="set" data-k="boost${d}"></div>`).join('')}
    <div class="set"><b>${t('confirmWin')}</b><input class="inp" id="set-confirmH" inputmode="numeric" value="${s.confirmH}" data-a="set" data-k="confirmH"></div>
    <div class="set"><b>${t('validWin')}</b><input class="inp" id="set-validH" inputmode="numeric" value="${s.validH}" data-a="set" data-k="validH"></div>
    <div class="set"><b>${t('relayBase')}</b><input class="inp" id="set-relayBase" inputmode="numeric" value="${s.relayBase}" data-a="set" data-k="relayBase"></div>
    <div class="set"><b>${t('relayPct')}</b><input class="inp" id="set-relayPct" inputmode="decimal" value="${s.relayPct}" data-a="set" data-k="relayPct"></div>
    <p class="sm mut" data-relay-ex>${rt('relayExample')}</p></div>
    <h3>${t('deliveryFees')}</h3><p class="mut sm">${rt('relayFormula')}</p>
    ${Object.keys(CITIES).map(c=>`<div class="tw" style="max-width:640px"><table style="min-width:420px"><thead><tr><th>${c}</th><th class="num">${t('homeFeeL')}</th><th class="num">${t('pickupDelL')}</th></tr></thead><tbody>${feeRows(c)}</tbody></table></div>`).join('')}`;
}
/* ================= live tracking ================= */
const NODES = {'Bonabéri':[42,72],'Pont':[98,100],'Akwa':[152,112],'Bonapriso':[126,170],'Deïdo':[176,58],'Bépanda':[232,84],'Makepe':[274,106],'Bonamoussadi':[306,40],'Ndokotti':[236,150],'Logbaba':[308,182],
  'Bastos':[150,36],'Etoa-Meki':[214,58],'Ngousso':[298,50],'Mokolo':[90,88],'Centre-ville':[166,108],'Essos':[258,110],'Mvog-Mbi':[198,164],'Biyem-Assi':[68,170]};
const NODE_CITY = n => ['Pont','Bépanda'].includes(n) ? 'Douala' : cityOf(n);
const EDGES = [['Bastos','Etoa-Meki'],['Etoa-Meki','Ngousso'],['Bastos','Mokolo'],['Bastos','Centre-ville'],['Mokolo','Centre-ville'],['Centre-ville','Etoa-Meki'],['Centre-ville','Essos'],['Essos','Ngousso'],['Centre-ville','Mvog-Mbi'],['Mvog-Mbi','Essos'],['Mokolo','Biyem-Assi'],['Biyem-Assi','Mvog-Mbi'],['Bonabéri','Pont'],['Pont','Akwa'],['Akwa','Bonapriso'],['Akwa','Deïdo'],['Akwa','Ndokotti'],['Deïdo','Bépanda'],['Bépanda','Makepe'],['Bépanda','Ndokotti'],['Makepe','Bonamoussadi'],['Deïdo','Bonamoussadi'],['Ndokotti','Logbaba'],['Ndokotti','Makepe'],['Bonapriso','Ndokotti'],['Makepe','Logbaba']];
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
  const sz = SELLERS[o.sid].zone; const city = cityOf(sz);
  const dest = o.mode==='relay' ? RELAYS[o.relay].zone : o.zone;
  let from, to;
  if(phase==='toSeller'){ to = sz; from = CITIES[city].zones.filter(z=>z!==sz && z!==dest).sort((a,b)=>Math.abs(route(a,sz).length-3)-Math.abs(route(b,sz).length-3))[0]; }
  else { from = sz; to = dest; }
  let path = route(from,to);
  if(path.length<2){ const nb = EDGES.find(e=>e.includes(from)); const n = nb[0]===from?nb[1]:nb[0]; path = [from, n, to]; }
  o.trk = {phase, path, t0:Date.now(), dur:TRIP[phase], min: phase==='toSeller'?STEP_MIN.picked:(o.mode==='relay'?STEP_MIN.atshop:STEP_MIN.delivered), arrived:false};
}
const activeTrip = o => o.trk && ((o.status==='assigned' && o.trk.phase==='toSeller') || (o.status==='picked' && o.trk.phase==='toBuyer'));
const km = px => (px*KM_PX).toFixed(1).replace('.', S.lang==='fr'?',':'.') + ' km';
function baseMap(city='Douala'){
  const nodes = Object.keys(NODES).filter(n=>NODE_CITY(n)===city);
  const edges = EDGES.filter(([a])=>NODE_CITY(a)===city);
  const roads = edges.map(([a,b])=>`<line x1="${NODES[a][0]}" y1="${NODES[a][1]}" x2="${NODES[b][0]}" y2="${NODES[b][1]}"/>`).join('');
  const labels = nodes.filter(n=>n!=='Pont').map(n=>{ const [x,y]=NODES[n]; return `<text x="${x}" y="${y-9}" text-anchor="middle">${n}</text>`; }).join('');
  const water = city==='Douala' ? `<path d="M0 196 C 40 170, 70 140, 80 104 S 92 30, 118 0 L 96 0 C 72 30, 70 70, 62 100 S 30 160, 0 176 Z" fill="var(--map-water)"/><text x="18" y="150" class="riv">Wouri</text>
   <rect x="196" y="112" width="26" height="18" rx="4" fill="var(--map-park)"/><rect x="268" y="138" width="22" height="16" rx="4" fill="var(--map-park)"/><rect x="150" y="128" width="20" height="14" rx="3" fill="var(--map-park)"/>`
   : `<ellipse cx="128" cy="132" rx="16" ry="9" fill="var(--map-water)"/><text x="128" y="152" text-anchor="middle" class="riv">${S.lang==='fr'?'Lac municipal':'Municipal lake'}</text>
   <ellipse cx="40" cy="40" rx="36" ry="24" fill="var(--map-park)"/><text x="40" y="44" text-anchor="middle" class="riv" style="fill:#6f9b6a">Mont Fébé</text><rect x="230" y="150" width="30" height="18" rx="5" fill="var(--map-park)"/>`;
  return `<rect width="340" height="210" fill="var(--map-land)"/>${water}<g class="rd-o">${roads}</g><g class="rd">${roads}</g><g class="lbl">${labels}</g>`;
}
const pinSvg = (x,y,color,label) => `<g transform="translate(${x},${y})"><path d="M0 0 C -9 -10,-9 -22,0 -22 C 9 -22,9 -10,0 0Z" fill="${color}" stroke="#fff" stroke-width="1.5"/><text y="-11" text-anchor="middle" class="pin-t">${label}</text></g>`;
const riderSvg = `<g class="rmk"><circle r="15" class="halo"/><circle r="10" fill="var(--g)" stroke="#fff" stroke-width="2.5"/><path d="M-5 2.5 a2.2 2.2 0 1 0 .1 0M5 2.5 a2.2 2.2 0 1 0 .1 0M-5 2.5 L-1.5 -3 H2.5 L5 2.5 M-1 -3 L0 -5.5" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></g>`;
function trackMap(o, who){
  // who: buyer | seller | rider
  const sz = SELLERS[o.sid].zone; const city = cityOf(sz); const S0=NODES[sz]; const relay = o.mode==='relay';
  const B0 = NODES[relay ? RELAYS[o.relay].zone : o.zone];
  const pins = pinSvg(S0[0],S0[1],'var(--amber)','V') + pinSvg(B0[0]+(B0===S0?12:0),B0[1],relay?'#B4236F':'var(--blue)',relay?'R':'C');
  if(o.status==='ready'){
    const ghosts=[[-34,-18],[30,-26],[22,30]].map(([dx,dy],i)=>`<g class="ghost g${i}" transform="translate(${S0[0]+dx},${S0[1]+dy})"><circle r="7" fill="var(--g2)" opacity=".85" stroke="#fff" stroke-width="2"/></g>`).join('');
    return `<div class="lmap"><svg viewBox="0 0 340 210" role="img" aria-label="${t('searching')}">${baseMap(city)}<circle cx="${S0[0]}" cy="${S0[1]}" r="40" class="radar"/>${ghosts}${pins}</svg>
      <div class="trk-bar"><div class="row"><span class="gps"></span><b>${t('searching')}</b></div><span class="xs mut">3 ${t('nearbyRiders')} · ${t('lightMap')}</span></div></div>`;
  }
  if(!activeTrip(o)) return '';
  const pts = o.trk.path.map(n=>NODES[n].join(',')).join(' ');
  const toSeller = o.trk.phase==='toSeller';
  const head = who==='rider' ? `${t(toSeller?'toSellerR':'toBuyerR')} <b data-next></b>` :
    who==='seller' ? `<b>${RIDER.name.split(' ')[0]}</b> ${toSeller? t('toSellerS') : t('toBuyerB').replace('vous', o.buyer).replace('you', o.buyer)}` :
    `<b>${RIDER.name.split(' ')[0]}</b> ${toSeller? t('toSellerB')+' '+SELLERS[o.sid].name : (relay ? (S.lang==='fr'?'en route vers ':'heading to ')+esc(RELAYS[o.relay].name) : t('toBuyerB'))}`;
  return `<div class="lmap" data-trk="${o.id}" data-who="${who}"><div class="trk-top"><span class="chip c-g"><span class="gps"></span>${t('gpsLive')}</span><span class="sm">${head}</span></div>
    <svg viewBox="0 0 340 210" role="img" aria-label="${t('liveTrack')}">${baseMap(city)}<polyline points="${pts}" class="rt"/><polyline points="${pts}" class="rt-done" data-done/>${pins}<g data-rider>${riderSvg}</g></svg>
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
const FLEET = [['Blaise O.','Mokolo','Essos',72],['Yves M.','Bastos','Mvog-Mbi',64],['Arnaud T.','Biyem-Assi','Ngousso',85],['Didier M.','Deïdo','Bonamoussadi',70],['Clovis E.','Makepe','Logbaba',62],['Rodrigue N.','Bonabéri','Akwa',80],['Hervé K.','Logbaba','Bonapriso',90],['Steve A.','Ndokotti','Deïdo',66],['Patrick E.','Bonapriso','Akwa',58]];
function fleetPos(i){ const [n,a,b,sec] = FLEET[i]; const path = route(a,b); const ph = ((Date.now()/1000 + i*17) % (sec*2)) / sec; return pointAt(path, ph<=1?ph:2-ph); }
function updateFleet(el){
  FLEET.forEach((f,i)=>{ const g = el.querySelector(`[data-f="${i}"]`); if(g){ const p=fleetPos(i); g.setAttribute('transform',`translate(${p.x.toFixed(1)},${p.y.toFixed(1)})`); } });
  const o = S.orders.find(x=>x.demo && activeTrip(x)); const g = el.querySelector('[data-f="me"]');
  if(g){ const home = S.rider.city==='Yaoundé' ? NODES['Centre-ville'] : NODES.Akwa; const p = o ? pointAt(o.trk.path, prog(o)) : {x:home[0]+10, y:home[1]+6}; g.setAttribute('transform',`translate(${p.x.toFixed(1)},${p.y.toFixed(1)})`); }
}
function aLive(){
  const city = ui.input.liveCity || 'Douala';
  const o = S.orders.find(x=>x.demo && activeTrip(x) && sellerCity(x.sid)===city);
  const dots = FLEET.map((f,i)=>NODE_CITY(f[1])===city ? `<g data-f="${i}"><circle r="6" fill="#7d9188" stroke="#fff" stroke-width="2"/><text y="-9" text-anchor="middle" class="fl-t">${f[0]}</text></g>` : '').join('');
  const route0 = o ? `<polyline points="${o.trk.path.map(n=>NODES[n].join(',')).join(' ')}" class="rt"/>` : '';
  const dz = o ? (o.mode==='relay' ? RELAYS[o.relay].zone : o.zone) : null;
  const me = S.rider.city===city || o ? `<g data-f="me" data-city="${city}">${riderSvg}<text y="-16" text-anchor="middle" class="fl-t me">${RIDER.name.split(' ')[0]}</text></g>` : '';
  const rows = (me?[[RIDER.name, o ? `${o.id} · ${t('st_'+o.status)}` : t('idle'), o ? `<span data-trk-eta="${o.id}"></span>` : '—']]:[]).concat(FLEET.filter(f=>NODE_CITY(f[1])===city).map((f,i)=>[f[0], `${f[1]} → ${f[2]}`, i%3===0?t('idle'):t('busy')]));
  return `<div class="row sb"><h2>${t('liveMap')}</h2><div class="seg">${Object.keys(CITIES).map(c=>`<button data-a="live-city" data-v="${c}" aria-pressed="${c===city}">${c}</button>`).join('')}</div></div><p class="mut">${t('lightMap')}</p>
   <div class="lmap big" data-fleet>${o?`<div style="display:none" data-trk="${o.id}" data-who="admin"></div>`:''}<svg viewBox="0 0 340 210">${baseMap(city)}${route0}${o?pinSvg(NODES[SELLERS[o.sid].zone][0],NODES[SELLERS[o.sid].zone][1],'var(--amber)','V')+pinSvg(NODES[dz][0],NODES[dz][1],o.mode==='relay'?'#B4236F':'var(--blue)',o.mode==='relay'?'R':'C'):''}${dots}${me}</svg></div>
   <div class="tw"><table><thead><tr><th>${t('rider')}</th><th>${t('state')}</th><th>${t('eta')}</th></tr></thead><tbody>${rows.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div>`;
}
function arrivalNotify(o){
  const r = RIDER.name.split(' ')[0];
  if(o.trk.phase==='toSeller'){ notify('seller', `${r} ${t('arrivedSeller')}`); notify('rider', t('arrivedRiderS')); }
  else if(o.mode==='relay'){ notify('relay', `${r} · ${o.id} · ${t('arrived')}`); notify('rider', t('arrived')+' · '+RELAYS[o.relay].name); }
  else { notify('buyer', `${r} ${t('arrivedBuyer')}`, 'sms'); notify('rider', t('arrivedRiderB')); }
}
function tick(){
  let changed = false;
  S.orders.forEach(o=>{ if(activeTrip(o) && !o.trk.arrived && prog(o)>=1){ o.trk.arrived = true; changed = true; arrivalNotify(o); } });
  if(changed){ save(); const ae = document.activeElement; if(ae && (ae.tagName==='INPUT'||ae.tagName==='TEXTAREA')){ const top=document.querySelector('.top'); if(top) top.outerHTML = topbar(); } else render(); }
  document.querySelectorAll('[data-trk]').forEach(updateMap);
  document.querySelectorAll('[data-fleet]').forEach(updateFleet);
  S.orders.forEach(o=>{ if(o.status==='delivered' && S.clock >= o.deliveredAt + S.settings.validH*60){ complete(o, true); save(); render(); } });
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
  case 'acct': S.login[role].acct = v; break;
  case 'login-next': S.login[role].step = 1; break;
  case 'login-ok': S.sess[role] = (role==='seller'||role==='relay') ? S.login[role].acct : true; S.login[role].step = 0; ui.toast = {text: S.lang==='fr'?'Connexion réussie.':'Signed in.'}; break;
  case 'admin-in': S.sess.admin = true; S.adminSeen = !!demoOrder() && RANK[demoOrder().status]>=8; break;
  case 'logout': S.sess[role] = null; S.nav[role] = {s: role==='admin'?'overview':role==='seller'?'dash':'home'}; break;
  case 'loc-open': ui.overlay = {type:'loc'}; ui.input.locCity = S.city; ui.input.locZone = S.bzone; break;
  case 'loc-city': ui.input.locCity = v; ui.input.locZone = CITIES[v].zones[0]; break;
  case 'loc-save': { const c = ui.input.locCity || S.city; const z = document.getElementById('loc-zone').value; S.city = c; S.bzone = z; ui.overlay = null; ui.input.zone = z; ui.toast = {text: t('locSaved')+' '+z+', '+c}; break; }
  case 'mode': ui.input.mode = v; captureCheckout(); break;
  case 'relay-pick': ui.input.relay = v; break;
  case 'validate': { const o=O(v); advance(STEP_MIN.completed); complete(o, false); break; }
  case 'sim48': { const o=O(v); S.clock = Math.max(S.clock, o.deliveredAt + S.settings.validH*60); complete(o, true); break; }
  case 'report-open': ui.overlay = {type:'report', oid:v}; ui.refuseR='rNot'; ui.input.repPh=0; ui.input.repText=''; break;
  case 'report-r': ui.input.repText = document.getElementById('rep-text')?.value || ''; ui.refuseR = v; break;
  case 'rep-photo': ui.input.repText = document.getElementById('rep-text')?.value || ''; ui.input.repPh = Math.min(2,(ui.input.repPh||0)+1); break;
  case 'report-send': { const o=O(v); const tx = (document.getElementById('rep-text')?.value || '').trim() || t(ui.refuseR); advance(20); setOrder(o,'disputed'); ui.overlay=null;
    S.disputes.unshift({id:'d'+(S.disputes.length+1), oid:o.id, reason:ui.refuseR, claim:{fr:tx,en:tx}, photos:ui.input.repPh||0, status:'open'});
    notify('seller', `${o.id} · ${t('sellerFrozen')}`); notify('admin', `${o.id} · ${t('st_disputed')}`); ui.toast = {text:t('frozen')}; break; }
  case 'rchat-open': { const r = role==='buyer'?'buyer':'rider'; go(role,{s:'rchat', id:v}); break; }
  case 'rquick': rMsg(v, role, t(el.dataset.q)); break;
  case 'rsend': { const inp = document.getElementById('rmsg'); const tx = inp && inp.value.trim(); if(!tx) return; rMsg(v, role, tx); break; }
  case 'rider-city': S.rider.city = v; break;
  case 'live-city': ui.input.liveCity = v; break;
  case 'switch-relay': S.sess.relay = v; S.login.relay.acct = v; break;
  case 'r-drop': { const o=O(v); advance(STEP_MIN.atshop); setOrder(o,'atshop'); riderPaid(o); closeChat(o); ui.toast = {text: (S.lang==='fr'?`Dépôt enregistré. ${fcfa(o.riderFee)} versés sur votre MoMo.`:`Drop recorded. ${fcfa(o.riderFee)} paid to your MoMo.`)};
    notify('buyer', S.lang==='fr'?`Votre colis ${o.id} est chez ${RELAYS[o.relay].name} (${L(RELAYS[o.relay].addr)}). Code de retrait : ${o.shopCode}. Ouvert ${RELAYS[o.relay].hours}.`:`Your parcel ${o.id} is at ${RELAYS[o.relay].name} (${L(RELAYS[o.relay].addr)}). Pickup code: ${o.shopCode}. Open ${RELAYS[o.relay].hours}.`, 'sms');
    notify('relay', `${t('newParcel')} ${o.id} · ${o.buyer}`); notify('seller', `${o.id} · ${t('st_atshop')}`); break; }
  case 'rl-hand': { const o=O(v); const c = document.getElementById('sc-'+v).value.trim(); if(c!==o.shopCode){ ui.err=v; break; } advance(STEP_MIN.collect); setOrder(o,'delivered'); o.deliveredAt = S.clock;
    S.relayEarn[o.relay] = (S.relayEarn[o.relay]||0) + o.relayFee; ui.toast = {text:`${t('relayHanded')} +${fcfa(o.relayFee)}`};
    notify('buyer', S.lang==='fr'?`Colis ${o.id} retiré. Validez la commande ou signalez un problème sous ${S.settings.validH} h.`:`Parcel ${o.id} collected. Validate the order or report an issue within ${S.settings.validH} h.`); notify('seller', `${o.id} · ${t('st_delivered')}`); break; }
  case 'nav': go(role, {s:v}); ui.listing = role==='seller'&&v==='add' ? ui.listing : ui.listing; if(role==='admin'){ ui.adminFlash=null; } break;
  case 'go': go(role, {s:el.dataset.s, id:v}); ui.overlay=null; break;
  case 'back': { const n=S.nav[role]; if(n.s==='checkout') go(role,{s:'product',id:n.id}); else if(n.s==='chat') go(role, n.from || {s:'chats'}); else go(role,{s: role==='buyer'?'home':'dash'}); break; }
  case 'filt': S.filt[el.dataset.k] = v; break;
  case 'open': go('buyer',{s:'product', id:v}); ui.input = {}; break;
  case 'like': S.likes[v] = !S.likes[v]; break;
  case 'size': ui.input.size = v; break;
  case 'saver': S.dataSaver = !S.dataSaver; break;
  case 'chat-open': { const from = {...S.nav[role]}; go(role,{s:'chat', key:v, from}); break; }
  case 'call': { if(v.startsWith('relay:')){ const r=RELAYS[v.slice(6)]; ui.call={name:r.name,color:r.color}; break; } const who = v==='rider'?{name:RIDER.name,color:'var(--g2)'}:v==='buyer'?{name:(S.nav[role].key? S.chats[S.nav[role].key]?.buyer : null) || BUYER.name,color:'var(--blue)'}:{name:SELLERS[v].name,color:SELLERS[v].color}; ui.call = who; break; }
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
  case 'pay': ui.input.pay = v; captureCheckout(); break;
  case 'pay-go': { captureCheckout(); ui.input.relay = el.dataset.relay; const pay = ui.input.pay||'momo'; const mode = ui.input.mode||'home';
    const p=P(v); const price = S.deals[`${v}|Aïcha`]||p.price; const z = mode==='relay' ? RELAYS[ui.input.relay].zone : (ui.input.zone||S.bzone); ui.pin=''; ui.overlay = {type:'momo', pay, amount: mode==='relay' ? price+sfee(z)+shopFee(price) : price+fee(z), pid:v}; break; }
  case 'pin': if(v==='⌫') ui.pin = ui.pin.slice(0,-1); else if(ui.pin.length<4) ui.pin += v; break;
  case 'pay-confirm': if(ui.overlay.boost) applyBoost(ui.overlay.boost); else placeOrder(ui.overlay.pid); break;
  case 'boost-open': ui.overlay = {type:'boost', pid:v, days:3, pay:'momo'}; break;
  case 'boost-days': ui.overlay.days = +v; break;
  case 'boost-pay': ui.overlay.pay = v; break;
  case 'boost-go': { const b = {pid:v, days:ui.overlay.days, pay:ui.overlay.pay}; ui.pin=''; ui.overlay = {type:'momo', pay:b.pay, amount:boostPrice(b.days), boost:b}; break; }
  case 'ov-close': if(el.dataset.stop!==undefined) return; ui.overlay = null; break;
  case 'rate': ui.input.revText = document.getElementById('rev-text')?.value || ''; ui.input.stars = +el.dataset.n; break;
  case 'rate-send': { const o=O(v); const tx = (document.getElementById('rev-text')?.value||'').trim(); S.reviews.push({sid:o.sid, oid:o.id, author:'Aïcha M.', stars:ui.input.stars, text:{fr:tx||'—', en:tx||'—'}, t:S.clock}); S.rated[v]=ui.input.stars; ui.input.stars = 0; ui.input.revText='';
    notify('seller', (S.lang==='fr'?'Nouvel avis : ':'New review: ')+stars(S.rated[v])+(tx?' « '+tx.slice(0,60)+' »':'')); break; }
  // seller
  case 's-confirm': { const o=O(v); advance(STEP_MIN.confirmed); setOrder(o,'confirmed'); notify('buyer', (S.lang==='fr'?`${SELLERS[o.sid].name} a confirmé votre commande ${o.id}.`:`${SELLERS[o.sid].name} confirmed your order ${o.id}.`), 'sms'); break; }
  case 's-decline': { const o=O(v); advance(10); setOrder(o,'cancelled'); P(o.pid).status='live'; notify('buyer', S.lang==='fr'?`Commande ${o.id} annulée. ${fcfa(tot(o))} remboursés sur votre compte.`:`Order ${o.id} cancelled. ${fcfa(tot(o))} refunded to your account.`, 'sms'); break; }
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
  case 'r-accept': { const o=O(v); advance(STEP_MIN.assigned); setOrder(o,'assigned'); o.rider = RIDER.name; startTrip(o,'toSeller'); openChat(o); go('rider',{s:'job', id:v}); notify('seller', S.lang==='fr'?`${RIDER.name} arrive pour ${o.id}. Demandez-lui son code.`:`${RIDER.name} is coming for ${o.id}. Ask for his code.`); notify('buyer', S.lang==='fr'?`Livreur trouvé pour ${o.id} : ${RIDER.name}.`:`Rider found for ${o.id}: ${RIDER.name}.`); break; }
  case 'r-deliver': { const o=O(v); const c = document.getElementById('dl-code').value.trim(); if(c!==o.code){ ui.err=true; break; } deliver(o); break; }
  case 'sms-open': ui.overlay = {type:'sms', oid:v}; ui.input.smsCode=''; break;
  case 'sms-go': { const o=O(v); const c = document.getElementById('sms-code').value.trim(); ui.overlay=null; if(c!==o.code){ ui.err=true; break; } deliver(o); ui.toast={text:'SMS → 8080 ✓', kind:'sms'}; break; }
  case 'refuse-open': ui.overlay = {type:'refuse', oid:v}; ui.refuseR='rNot'; break;
  case 'refuse-r': ui.refuseR = v; break;
  case 'refuse-go': { const o=O(v); advance(12); setOrder(o,'refused'); ui.overlay=null; closeChat(o); S.rider.earnedToday += Math.round(o.riderFee/2); P(o.pid).status='live';
    notify('buyer', S.lang==='fr'?`Retour confirmé (${t(ui.refuseR)}). ${fcfa(o.price)} remboursés.`:`Return confirmed (${t(ui.refuseR)}). ${fcfa(o.price)} refunded.`,'sms'); notify('seller', S.lang==='fr'?`Article refusé : ${t(ui.refuseR)}. Le livreur vous le rapporte.`:`Item refused: ${t(ui.refuseR)}. The rider is bringing it back.`); notify('admin', `${o.id} · ${t('st_refused')}`); break; }
  // admin
  case 'app': { const x=S.apps.find(a=>a.id===v); x.status = el.dataset.k; ui.adminFlash = `${x.name} · ${t(x.status)}`; break; }
  case 'lst': { const p=P(v); p.status = el.dataset.k==='live'?'live':'rejected'; ui.adminFlash = `${L(p.name)} · ${t(p.status==='live'?'approved':'rejected')}`; if(p.status==='rejected') S.products = S.products.filter(x=>x.id!==v); notify('seller', `${L(p.name)} · ${t(el.dataset.k==='live'?'live':'rejected')}`); break; }
  case 'disp': { const d=S.disputes.find(x=>x.id===v); d.status='resolved'; d.result=el.dataset.k; const o=O(d.oid); if(el.dataset.k==='refunded'){ setOrder(o,'refunded'); notify('buyer', `${o.id} · ${t('st_refunded')}`, 'sms'); notify('seller', `${o.id} · ${t('st_refunded')}`); } else complete(o, false); ui.adminFlash = `${o.id} · ${t(el.dataset.k)}`; break; }
  case 'trk-skip': { const o=O(v); if(o && o.trk) o.trk.t0 = Date.now() - o.trk.dur; tick(); return; }
  case 'switch-shop': S.sess.seller = v; S.login.seller.acct = v; break;
  default: return;
  }
  if(S.role==='admin' && S.sess.admin){ const o=demoOrder(); if(o && RANK[o.status]>=8) S.adminSeen = true; }
  save(); render();
}
function captureListing(){
  const g = id => document.getElementById(id);
  if(g('l-title')) ui.input.lt = g('l-title').value;
  if(g('l-price')) ui.input.lp = g('l-price').value;
  if(g('l-size')) ui.input.lz = g('l-size').value;
}
function placeOrder(pid){
  const p = P(pid); const key = `${pid}|Aïcha`; const price = S.deals[key] || p.price; const pay = ui.input.pay || 'momo';
  const mode = ui.input.mode || 'home'; const relay = mode==='relay' ? ui.input.relay : null;
  const zone = mode==='relay' ? RELAYS[relay].zone : (ui.input.zone || S.bzone);
  if(!S.sess.seller) S.login.seller.acct = p.sid;
  if(relay && !S.sess.relay) S.login.relay.acct = relay;
  advance(2);
  const dFee = mode==='relay' ? sfee(zone) : fee(zone); const riderFee = dFee;
  const o = {id:'GR-'+(S.seq++), pid, sid:p.sid, buyer:BUYER.name, zone, landmark: mode==='relay' ? L(RELAYS[relay].addr) : (ui.input.landmark || ''), size: ui.input.size || p.sizes[0], price, fee:dFee, riderFee, relayFee: mode==='relay' ? shopFee(price) : 0, mode, relay, pay, status:'placed', events:[{s:'placed', t:S.clock}], pickup:code4(), code:code4(), shopCode:code4(), demo:true};
  S.orders.push(o); if(!p.lot) p.status = 'sold';
  ui.overlay = {type:'paid', oid:o.id}; ui.input = {};
  notify('seller', (S.lang==='fr'?'Nouvelle commande ':'New order ')+`${o.id} · ${L(p.name)} · ${fcfa(price)}`);
  if(relay) notify('relay', `${t('expectedParcel')} ${o.id} · ${o.buyer}`);
  notify('admin', `${o.id} · ${fcfa(tot(o))}`);
}
// A paid boost puts the listing first in its city's results with a "Sponsored" badge.
// Buying again while a boost is running extends it from its current end time.
function applyBoost(b){
  const p = P(b.pid); const amount = boostPrice(b.days);
  p.boostUntil = Math.max(S.clock, p.boostUntil||0) + b.days*1440;
  (S.boosts = S.boosts || []).push({pid:p.id, sid:p.sid, days:b.days, amount, pay:b.pay, t:S.clock});
  ui.overlay = null;
  ui.toast = {text:`${t('boostDone')} ${untilL(p.boostUntil)} · ${fcfa(amount)}`};
  notify('admin', `${t('boost')} · ${SELLERS[p.sid].name} · ${fcfa(amount)}`);
}
function captureCheckout(){
  const lm = document.getElementById('landmark'); if(lm) ui.input.landmark = lm.value;
  const z = document.getElementById('zone'); if(z) ui.input.zone = z.value;
}
function riderPaid(o){ S.rider.earnedToday += o.riderFee; S.rider.trips += 1; }
function openChat(o){
  S.rchats[o.id] = {open:true, unreadB:1, unreadR:0, msgs:[{from:'sys', t:S.clock, text:{fr:T.fr.chatOpened, en:T.en.chatOpened}}, {from:'rider', t:S.clock, text:{fr:`Bonjour, c’est ${RIDER.name.split(' ')[0]}, votre livreur Grendi. Je récupère votre colis et je vous tiens au courant.`, en:`Hello, it’s ${RIDER.name.split(' ')[0]}, your Grendi rider. I’m collecting your parcel and will keep you posted.`}}]};
}
function closeChat(o){ const c = S.rchats[o.id]; if(c && c.open){ c.open = false; c.msgs.push({from:'sys', t:S.clock, text:{fr:T.fr.chatClosed, en:T.en.chatClosed}}); } }
function rMsg(oid, role, text){
  const c = S.rchats[oid]; if(!c || !c.open) return; c.msgs.push({from:role, t:S.clock, text});
  if(role==='buyer'){ c.unreadR = (c.unreadR||0)+1; notify('rider', `${BUYER.name.split(' ')[0]} : ${text}`);
    setTimeout(()=>{ if(!c.open) return; advance(1); c.msgs.push({from:'rider', t:S.clock, text:{fr:T.fr.riderAuto, en:T.en.riderAuto}}); c.unreadB=(c.unreadB||0)+1; save(); if(S.role==='buyer') render(); }, 1400); }
  else { c.unreadB = (c.unreadB||0)+1; notify('buyer', `${RIDER.name.split(' ')[0]} : ${text}`); }
}
function complete(o, auto){
  if(o.status==='completed') return;
  setOrder(o,'completed'); o.autoReleased = !!auto;
  notify('seller', (S.lang==='fr'?`${o.id} ${auto?'validée automatiquement (48 h)':'validée par l’acheteur'}. ${fcfa(o.price)} versés sur votre MoMo.`:`${o.id} ${auto?'auto-validated (48 h)':'validated by the buyer'}. ${fcfa(o.price)} paid to your MoMo.`), 'sms');
  notify('admin', `${o.id} · ${t('st_completed')}`);
  if(auto) notify('buyer', t('autoReleased'));
}
function deliver(o){
  advance(STEP_MIN.delivered); setOrder(o,'delivered'); o.deliveredAt = S.clock;
  riderPaid(o); closeChat(o);
  notify('seller', `${o.id} · ${t('sellerWait')} ${hmd(o.deliveredAt + S.settings.validH*60)}.`);
  notify('buyer', S.lang==='fr'?`Commande ${o.id} livrée. Validez-la ou signalez un problème sous ${S.settings.validH} h.`:`Order ${o.id} delivered. Validate it or report an issue within ${S.settings.validH} h.`);
  notify('admin', `${o.id} · ${t('st_delivered')}`);
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
  if(el.dataset.a==='set'){ S.settings[el.dataset.k] = el.dataset.k==='relayPct' ? (parseFloat(String(el.value).replace(',','.'))||0) : num(el.value); save(); const ex=document.querySelector('[data-relay-ex]'); if(ex) ex.textContent = rt('relayExample'); }
  if(el.dataset.a==='fee'){ S.settings.fees[el.dataset.k] = num(el.value); save(); }
  if(el.dataset.a==='sfee'){ S.settings.sfees[el.dataset.k] = num(el.value); save(); }
  if(el.dataset.a==='fee'||el.dataset.a==='sfee'){ const g=document.querySelector(`[data-gain="${el.dataset.k}"]`); if(g) g.innerHTML = `<b>${fcfa(fee(el.dataset.k)-sfee(el.dataset.k))}</b>`; }
  if(el.id==='rev-text') ui.input.revText = el.value;
  if(el.id==='rep-text') ui.input.repText = el.value;
  if(el.id==='sms-code'){ ui.input.smsCode = el.value; const m = el.closest('.sheet').querySelector('.msg'); m.textContent = m.textContent.replace(/\s\d*$/,' ') + el.value; }
  if(el.id==='landmark') ui.input.landmark = el.value;
  if(el.id==='offer-amt') ui.offerAmt = el.value;
});
app.addEventListener('change', e=>{
  if(e.target.id==='loc-zone'){ ui.input.locZone = e.target.value; return; }
  if(e.target.id==='zone'){ ui.input.zone = e.target.value; const lm=document.getElementById('landmark'); if(lm) ui.input.landmark=lm.value; render(); }
});
app.addEventListener('keydown', e=>{
  if(e.key==='Enter' && e.target.dataset.enter){ e.preventDefault(); act(e.target.dataset.enter, e.target); }
});
window.addEventListener('storage', e=>{ if(e.key===KEY){ try{ S = JSON.parse(e.newValue) || S; render(); }catch(_){} } });

render();
})();
