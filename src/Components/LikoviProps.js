import LikoviDijeteprops from './LikoviDijeteprops';
export default function LikoviProps(){
    let likovi={
        ime:"Afrodita",
        vrsta:"Boginja ljubavi i ljepote",
        opcenito:"Roditelji: Uran/Zeus i Diona",

        ime2:"Apolo",
        vrsta2:" Bog medicine, proroštva",
        opcenito2:"Roditelji: Zeus i Leta",

        ime3:"Ares",
        vrsta3:"Bog rata i uništenja",
        opcenito3:"Roditelji: Zeus i Hera",

        ime4:"Artemis",
        vrsta4:"Boginja Mjeseca, zvijeri i lova",
        opcenito4:"Roditelji: Zeus i Leta",

        ime5:"Atena",
        vrsta5:"Boginja mudrosti i snage",
        opcenito5:"Roditelji: Zeus i Metida",

        ime6:"Had",
        vrsta6:"Bog mrtvih i podzemnog svijeta",
        opcenito6:"Roditelji: Kronos i Reja",

        ime7:"Zeus",
        vrsta7:"Vrhovni bog, bog neba i munja",
        opcenito7:"Roditelji: Kronos i Reja",

        ime8:"Posejdon",
        vrsta8:"Bog mora, oluja, potresa, suša",
        opcenito7:"Roditelji: Kronos i Reja",

        ime9:"Hermes",
        vrsta9:"Bog putnika, lopova, sportaša",
        opcenito9:"Roditelji: Zeus i Maja",

        ime10:"Hefest",
        vrsta10:"Bog vatre i kipara, kovač",
        opcenito10:"Roditelji:??? i Hera",

        ime11:"Atlas",
        vrsta11:"Titan- nositelj nebeskog svoda",
        opcenito11:"Roditelji:Titan Japet i Klimena",

        ime12:"Kronos",
        vrsta12:"Titan zemljoradnje/ drugi bog vremena",
        opcenito12:"Roditelji:Uran i Geja",

        ime13:"Eos",
        vrsta13:"Boginja praskozorja i jutarnjeg neba",
        opcenito13:"Roditelji: Titan Hiperion i Tija",

        ime14:"Prometej",
        vrsta14:"Bog koji je ljudima dao vatru",
        opcenito14:"Roditelji:Titan Japet i Klimena ",

        ime15:"Kerberus",
        vrsta15:"Troglavi pas, Hadov čuvar u podzemlje",
        opcenito15:"Roditelji: Tifon i Ehidna",

        ime16:"Kiklop Polifem",
        vrsta16:"Div koji ima samo jedno oko.",
        opcenito16:"Roditelji:Uran i Geja",

        ime17:"Grifin",
        vrsta17:"Zvijer s tijelom lava i glavom orla",
        opcenito17:"Ima četiri noge, krila i orlove pandže",

        ime18:"Jednorog",
        vrsta18:"Bijeli konj s rogom na čelu",
        opcenito18:"Tko pije njegovu krv, bit će proklet.",

        ime19:"Kralj Midas",
        vrsta19:"Kralj Frigije,pokrajine u Anatoliji",
        opcenito19:"Sve što dotakne pretvara u zlato",

        ime20:"Pandora",
        vrsta20:"Prva žena, Zeus za kaznu poslao Prometeju",
        opcenito20:"Otvorila je kutiju i oslobodila sve zlo",

        ime21:"Ikarus",
        vrsta21:"Spasio se iz zarobljeništva pomoću krila",
        opcenito21:"Sin Dedala koji je izgradio labirint",

        ime22:"Tezej",
        vrsta22:"Legendarni je atenski kralj",
        opcenito22:"Sin Etre i Posejdona/Egeja",
    }
    return( <div className='App'>
        <LikoviDijeteprops props={likovi}></LikoviDijeteprops>
    </div>
    );
}