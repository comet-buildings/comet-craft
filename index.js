#!/usr/bin/env node
const chalk = require('chalk');
const prompts = require('prompts');

console.log('_________                        __    .__                              _________                _____  __  ._.');
console.log('\\_   ___ \\  ____   _____   _____/  |_  |  |   _______  __ ____   ______ \\_   ___ \\____________ _/ ____\\/  |_| |');
console.log('/    \\  \\/ /  _ \\ /     \\_/ __ \\   __\\ |  |  /  _ \\  \\/ // __ \\ /  ___/ /    \\  \\/\\_  __ \\__  \\\\   __\\\\   __\\ |');
console.log('\\     \\___(  <_> )  Y Y  \\  ___/|  |   |  |_(  <_> )   /\\  ___/ \\___ \\  \\     \\____|  | \\// __ \\|  |   |  |  \\|');
console.log(' \\______  /\\____/|__|_|  /\\___  >__|   |____/\\____/ \\_/  \\___  >____  >  \\______  /|__|  (____  /__|   |__|  __');
console.log('        \\/             \\/     \\/                             \\/     \\/          \\/            \\/             \\/');


console.log("")
console.log(chalk.blue(`✨ ${chalk.bold('Remplis ce formulaire et tente de gagner une demi-journée pour ton équipe et toi')} dans l'un des ${chalk.bold('6 lieux inspirants Comet Meetings')} au coeur de Paris ! ✨`))
console.log("")
console.log(chalk.italic("Double tes chances en prenant un selfie avec un membre de la team Comet (Alexandre Victoor, Johan Rouve, Johann Rakotoharisoa, Jordane Grenat, Bastien Tran et/ou Marjorie Aubert) et en nous taguant sur LinkedIn @cometmeetings"))
console.log("")
console.log(chalk.greenBright("Nous tirerons au sort le/la grand.e gagnant.e le 20 avril 2023. Si tu es retenu.e, nous te contacterons 😉"))
console.log("")


const questions = [
    {
      type: 'text',
      name: 'company',
      message: '🏢 Ta (super) entreprise ?',
      validate: (value) => value.length > 2
    },
    {
      type: 'text',
      name: 'name',
      message: '🙋‍♂️ Qui es-tu ? (nom et prénom)'
    },
    {
      type: 'text',
      name: 'email',
      message: '📧 Comment te contacter si tu gagnes ?'
    },
    {
        type: 'confirm',
        name: 'newletter',
        message: "Acceptes-tu d'être contacté pour des emails commerciaux ?",
        initial: false
    },
  ];
  
(async () => {
    const response = await prompts(questions);
})();

console.log("")

console.log("L'équipe Comet à Devoxx")
console.log("")

console.log('Mercredi NodeJS : patterns et outils pour partir en production sereinement - Alexandre VICTOOR https://cfp.devoxx.fr/2023/talk/NBS-8618/NodeJS_:_patterns_et_outils_pour_partir_en_production_sereinement')
console.log('Mercredi Avec Zod, luttez contre l’any-gration à vos frontières - Jordane GRENAT https://cfp.devoxx.fr/2023/talk/OCF-4410/Avec_Zod,_luttez_contre_l%E2%80%99any-gration_a_vos_frontieres')
console.log('Vendredi Remix Workshop - Johann RAKOTOHARISOA et Johan ROUVE https://cfp.devoxx.fr/2023/talk/JAI-5123/Remix_Workshop')
console.log("Vendredi Mob et Extreme programming : REX d'une développeuse junior - Marjorie AUBERT https://cfp.devoxx.fr/2023/talk/TUD-2583/Mob_et_Extreme_programming_:_REX_d%E2%80%99une_developpeuse_junior ")


console.log("")
console.log('   /   \\_____   _______  ____  __');
console.log('  / /\\ / _ \\ \\ / / _ \\ \\/ /\ \\/ /');
console.log(' / /_//  __/\\ V / (_) >  <  >  < ');
console.log("/___,' \\___| \\_/ \\___/_/\\_\\/_/\\_\\")