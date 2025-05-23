const textBox = document.getElementById("text-box");
const textBox2 = document.getElementById("text-box2");
const textBox3 = document.getElementById("text-box3");
const button1 = document.getElementById("test0-button");
const button2 = document.getElementById("test1-button");
const button3 = document.getElementById("test2-button");

const texte1 = `Bienvenue, ceci est un tutoriel qui vous expliquera comment obtenir Dragon Quest X Offline sur Steam:
  
  La Page Steam étant non accessible pour les personnes ne vivant pas au Japon, ce tutoriel est nécessaire pour obtenir légalement le jeu sur un compte.
  
  <strong>/!\\ Une Carte Bancaire est nécessaire, sinon vous ne pouvez pas payer, mais n'hésitez pas a lire jusqu'au bout /!\\</strong>
  
  (Ce Tutoriel est une traduction française de <a href="https://docs.google.com/document/d/10q5C4iKtms9Y9vt71yAMQFsuJf4oLJkQ9IUJPrm0cPI/view?tab=t.0" target="_blank">Ce tutoriel</a> d'ailleurs, si vous avez des questions un lien Discord et Google Forms sont disponibles la bas)
  
  <b>Etape 1 : le VPN</b>
  1) Un VPN est obligatoire pour accéder aux page Japonaises, <a href="https://github.com/SoftEtherVPN/SoftEtherVPN_Stable/releases/download/v4.39-9772-beta/softether-vpnclient-v4.39-9772-beta-2022.04.26-windows-x86_x64-intel.exe" target="_blank">SoftEther</a> est gratuit et plutot simple d'utilisation (Attention le lien télécharge directement)

  Toutes ces étapes doivent être faites avec un VPN, je vous conseille de lire les étapes du <a href="https://docs.google.com/document/d/10q5C4iKtms9Y9vt71yAMQFsuJf4oLJkQ9IUJPrm0cPI/view?tab=t.0#bookmark=id.rhxwyozdliya" target="_blank">Tutoriel Original</a> pour plus de clarté
  
  2) Achetez une carte prépayée ou un code Steam SeaGM ou PlayAsia par exemple. (Vous comprendez plus tard) Voici quelques liens utilisables:
  <a href="https://www.seagm.com/steam-wallet-card-japan" target="_blank">Steam Wallet Code (SeaGM)</a> ------- <a href="https://www.play-asia.com/steam-gift-card-jpy-5000-for-japan-currency-only/13/70exkj" target="_blank">Steam Wallet Code (PlayAsia)</a>
  <a href="https://www.seagm.com/en-us/japan-webmoney-prepaid-card" target="_blank">WebMoney (SeaGM)</a> ------------------ <a href="https://www.play-asia.com/webmoney-2000-point-card/13/706xmv" target="_blank">WebMoney (PlayAsia)</a>

  <b>Etape 2 : Steam</b>
  1) Creez un Compte Steam, vous ne pourrez pas effectuer ces actions sur votre compte principal.
  
  2) Quand il vous sera demandé, sélectionnez 'Japon' comme pays. Puis ajoutez un moyen de paiement Japonais (Cette étape est nécessaire pour vérifier la région), pour ce faire, utilisez les fonds WebMoney de l'étape du dessus (ou lisez la suite)

  3) Pour trouver Dragon Quest X Offline sur le store, vous pouvez chercher l'appid: <b>1358750</b> le jeu devrait être affiché

  4) Ajoutez au panier, puis continuez vers le paiement, sélectionnez "Steam Wallet" (Portefeuille Steam).
  Si vous n'avez pas pu ajouter les fonds de l'étape 2, vous pouvez choisir "WebMoney" (Je ne sais pas comment c'est affiché en français désolée) dans le menu déroulant. Continuez vers Degica, cela ouvrira une fenêtre externe. Copiez le numéro de série de vos cartes SeaGM/PlayAsia dans la boite qui apparait.

  Si vous avez une Carte Steam prépayée a la place (L'étape du dessus ne marche pas donc) cliquez sur "Carte Steam Prépayée" depuis ce même menu déroulant et continuez.
  
  5) Normalement, Dragon Quest X Offline devrait être accessible! Malheureusement le Partage Familial ne devrait pas fonctionner entre vos comptes Steams de votre Région et le compte Japonais, ducoup vous devrez surement jouer avec ce compte Japonais
  
  
  
  
  
  
  
  
  
  
  
  
  Et si vous n'avez pas les moyens de faire tout ça.. bon bah si "/index.html" se trouve sur le lien dans votre barre de recherche; retirez le, puis rajoutez "/sites.html" juste après ".glitch.me" sur le lien du site
`;





const texte2 = `La traduction Française se trouve sur la page <a href="https://github.com/Keraloon/DragonQuestXOfflineFR" target="_blank">Github</a> et sera sur NexusMods très bientot ;)

Le <a href="https://docs.google.com/spreadsheets/d/18tu-NqD5KI0jJu-YT-31EITN1g67V1SND-ZGSqkGMpM/" target="_blank">Google Docs</a>  de la traduction du jeu est toujours pas fini, donc si vous souhaitez aider pour quelques lignes, n'hésitez pas!

Les fichiers PAKs se trouvent dans le dossier Game/Content/Paks, il faut les ajouter dedans, puis lancer le jeu (Pour la version switch, une version arrivera en temps voulu)

<strong>Statut de la traduction :</strong> (Scrollez jusqu'en bas)
Cinématique Histoire Principale : <strong>100%</strong>, Post Game <a>~15%</a>

Textes Plaisantrin : <a>?%</a>
Textes Nain : <a>?%</a>
Textes Ogre : <a>?%</a>
Textes Nhumide : <a>?%</a>
Textes Elfe : <a>?%</a>
Textes Humain : <a>?%</a>

Dialogues Hors Cinématique : Peut être <a>10%</a>
Lieux : <strong>100%</strong>

Monstres : <strong>100%</strong> Description : <a>0%</a>
Objets Communs : <strong>100%</strong>. Description <strong>100%</strong>
Objets Rare : <strong>100%</strong>. Description : <strong>100%</strong>
Armes : <strong>100%</strong>. Description : <strong>100%</strong>
Equipement : <strong>100%</strong>. Description : <strong>100%</strong>
Accessoires : <strong>100%</strong>. Description : <strong>100%</strong>
Sorts : <strong>100%</strong>. Description : <strong>100%</strong>
Aptitudes : <strong>100%</strong>. Description : <strong>100%</strong>

Quêtes : <a>6.25%</a>

UI: Je sais pas mais <a>pas mal %</a>
Textes en Combat : <a>~75 %</a>
Restes : <a>Très peu %</a>


`;

const texte3 = `Vous pouvez également trouver la traduction FR de <strong>Dragon Quest Monsters : Terry's Wonderland 3D</strong> sur ma page <a href="https://github.com/Keraloon/French-Translation-DQMT3D" target="_blank">Github</a>.

Si jamais vous voulez me contacter, pour des bugs, des erreurs, des incompréhensions, ou tout autre, vous pouvez me retrouver sur <a href="https://twitter.com/Keraloon" target="_blank">Twitter</a>, <a href="https://bsky.app/profile/keraloon.bsky.social" target="_blank">Bluesky</a>, <a href="https://twitch.tv/Keraloon" target="_blank">Twitch</a>, <a href="https://discord.gg/8trjMsm36k" target="_blank">Discord</a>  etc..


Et si jamais ça intéresse quelqu'un le <a href="https://paypal.me/Keraloon" target="_blank">Paypal</a> est en bio parce que c'est quand même vachement rigolo.
`;

textBox.innerHTML = texte1;

button1.addEventListener("click", () => {
  textBox.style.display = "block";
  textBox2.style.display = "none";
  textBox3.style.display = "none";
  textBox.innerHTML = texte1;
});

button2.addEventListener("click", () => {
  textBox.style.display = "none";
  textBox2.style.display = "block";
  textBox3.style.display = "none";
  textBox2.innerHTML = texte2;
});

button3.addEventListener("click", () => {
  textBox.style.display = "none";
  textBox2.style.display = "none";
  textBox3.style.display = "block";
  textBox3.innerHTML = texte3;
});
