
import _ from 'lodash'


const input = [
    'gfbd geadcb gaefc agdcf cdgfba dcf abdefc cadbg agfecbd df | acgbd dafcg fd df',
    'fdcbge dgfeca eagcd cdb bfcag acdebg dcagb ebgdfca abde db | bd dcb agdcb fbegdc',
    'gdabcf gcfdae dagecb acfdgbe fabge fcbd cb adfgc acfgb bca | dagbcef fedgac fcadegb bca',
    'febag gefbc acfegbd fdega ba adbe fecdga ebagfd gcbfad gba | ebda gabfced baed bfgec',
    'afebg bgaedfc degfa bga fdgbea deafcg ab gcbfe dgcbae bfad | dfgae ba faged agefcdb',
    'dfgebc cfdgbea adc ad fdcba acgbf fdae degcba efcabd decbf | feda ad decbga cdgefb',
    'afce aegdbfc bdgeca def ef ecafgd gedca cdegf cbfgd afegbd | dcaegbf ef acfebgd bedgfa',
    'fcgeb gabefdc cgda fdc gdfbae deacfb fcaegd fedga dc gecdf | fdc cdafbe dc cd',
    'be acgfdbe bceaf facedg dafebg acfegb cegaf bfe bceg fbdac | fbe abfcdeg cadbf ebacf',
    'egbfd da bdca edgab gcbea dga eabcgf dcgbea afgcde dfabegc | ad ceafdg da gad',
    'cfdabge bfdac dacfeb gcedbf fbdgac gbd gd acdg dgafb bgafe | dbg dbg fdacb cbdaf',
    'fbdeacg faegcd cdfgba geafc bga afebg ab acfbeg baec ebfgd | ba agb baec ab',
    'gafd bcaef fg gaefb gcadbe agdbe egdbfc gebfad bfg gfdecba | fdaebg abdcfeg fgb faebcgd',
    'efgdc caefg fga gecba cadgbe facgbd aebf fcaegdb fa agcbfe | af gbdfac bgdecaf af',
    'gdfe afdec fd edfacgb agcbef cefga adcbgf fda acdeb edcfag | bcdfga agcfed cfdgba fdecag',
    'cfgbdea dcaebf cdg ebdfgc gd ecdfga bcefd agfbc gbde fgdbc | cefdb cfagde gd dfceag',
    'ecfad cdafg ced febad ebgacdf dfebcg badfeg ec abce beacfd | gefbdc bgfaecd abgcdfe degacfb',
    'deg agcd dg cfead febgc cbfgaed ebfacd faegdc gfdce fdgbea | dg gde fbcge aecdgf',
    'aed ae gdcae efbadc fcebgd gdcbfea cgbeda abeg dgacf cgbed | ae ae agbe gcbed',
    'ebaf cbged ae bgadf efagdb edgab ade bgdfaec dgbfac gefadc | dbgce adbegcf abfgcd ae',
    'bgfca dfgcbe bgdeca gfdbea efdgbca fd cfbdg fced fdb egbcd | ebgcda dbf gcbaf dcgfb',
    'fgeacb dae dcegab debfac gabdf fecd ebadf fgbeacd de baecf | cbgaedf faecdgb cgdafeb ade',
    'gafdcbe fce defagc caeg adbegf cfbgd gfdec fedga decabf ec | ec acfbgde acgbdfe befadgc',
    'acdgfb cafgd dgcba cb cab gfdcbea bcfg fgcdae bgade fdabec | bc deacgf bac cfgb',
    'dafcg dcbega gdbcfe dgfcb bf gfcabe fbed gbf begdcaf gdcbe | bdeagc fb dbfe fbg',
    'gaedfc cdfbg efbcd fed acbed dgbcae bfae ef befcdag abcdfe | fgebdca fecdb fed fedbgac',
    'df cedf gfcdb badgfe ecbadfg fdb ebdcgf gbdca cbfage febcg | fcebg gbacd fd fd',
    'dbfce faebd dgefba cfgbe dcab acbdfge adfceg dc cfd fadbce | bacd cedfagb acdb fdabe',
    'fedbcg adcegb dgbec gabfc dafgecb eadbfc bfd fedg gbfdc df | fged fbdcae dcbfg efdg',
    'eafcdb acgf ecgfd dfgbe gec bdeacg dfegcab cg dfcaeg eadcf | dbfeg gc fdeac ecg',
    'agbcedf cafbeg gdabf fagcd afegc cdeg dfc dc cefadg dfebca | dc cd dfc afbcedg',
    'cfadbge ag bdfea cegdbf cefgda afcegb fag afdeg gcdfe gcad | ga dfgcae dagcef agcd',
    'cdf abfdc afcgbd fd ecbgafd gfda cbfage adecb gcdbfe gafcb | cafgb aecdfgb dfgbcea gafd',
    'bcgeadf bacgde dca da fedgac dfgec cfgdeb fedca gfda cfbea | fegcbd bgdface dca geacbdf',
    'bedcg ageb gde dacegb acgfed bcedf agbdc cfgdba ge begdfac | efbdcga dbacge acbgd egba',
    'de ced gcabdfe dgacef egdf gaecf cgbeda dbcaf facde gbface | gfed cbedag abefdcg gecbafd',
    'gfbc ecbfdga dbcae cafegd cfa cf fbadg bgadef dfbac fcgadb | eagbdf dafcbg cf fgdab',
    'bcedaf cgbdfa dgafeb ca bfacged bagdf egdcf agcb gdfca cda | debgfa cad agfedb acd',
    'fe eagdcb efcdab bef fcabe agcbf cbefadg gbfced cbdae aefd | fe dacbfge bgfac fe',
    'adfgb eagbfc gbdea fbgead abced egfd dcgfeab dfgcba eg eag | gdefabc aebcd ge cdfgabe',
    'gbfad abecdg bedafc cfa ecfd dbcaf cafebg ecdab fc cdbfage | acgfbed cedf gabced cf',
    'cgfda eafdb dcgaeb bgef egd ge bcaefd adgcfeb defag bafdge | edbcafg ebgf eg afdge',
    'fdb fbegcd bgfad abfgdc efadcgb fbac fdecga agedb gfcda bf | afdbcg abged egbad bfca',
    'edbagf eg debgf agdecfb gaed gdcfb fadeb gfe deafbc fgabce | afcedbg eg degbcfa fcbdea',
    'bce badcg gedcbaf begacf agdcbe egdfb edgcb deca gfcdba ec | gcfebad ec cbadg ec',
    'fbagcd ebdcf caebdf bdeacfg aecf fc dabegc cbead fcd edgfb | ebfgadc bgacdfe gdafbc cdbgea',
    'bgfac gdac dg cfebdg becgfad bdg bdfcag edfab fadbg ebcfga | cdbfeg dcgbafe bdg badfecg',
    'gde bcgda cagefd ge agdebcf dfgbae gebda defbca bfade febg | befg fgeb baedf edgfab',
    'gab fedba agfcebd dcafg egafcd bg fdcabg bfdag cedgba cfgb | dfbgca acfbgde adgbf bag',
    'af afg cbfa abgec cdgeba bfedcga faegcb gdfcae gebfd bgaef | gfbea egafb fa egcfab',
    'dgcfe ca bcdafg adecg dac bgdecf fdceag cfea faecgbd aedbg | ca acd debgafc ca',
    'egadcfb ea eac eagcfb bgdcaf cfedg baed becgad eacdg gdbca | abed ace edba aedb',
    'aedbgf dfgcbe fcda fadbg agbec agcbdef fc gbfca fgdabc fcg | cf gbcafd gfc gbadcf',
    'dfge adcebfg caebdg dg bfgcd bcegf dcg gaebfc adfcb cgedfb | gabced cgd bgfcdea dgbcf',
    'baef gcabefd bge dgcabf agdce baged badfge dgbaf eb cdgbfe | abfe ebg fdbgaec aefdcbg',
    'eagbcd gbd gbcedaf bacfd afbg fgcbd cafdeb bfcgda gcfde gb | gfdcb bg gdcfe afgb',
    'baged bdaec eabcfd cbe efcbgd ce fbadcg cegdafb fdcba aefc | ceb aecdgbf bcdaf bdgea',
    'bcaf becfd eac gdaeb caefbd cabde bedcfg fedgac ac dabfegc | ca fbac bcfdage bafc',
    'efc ce deacf ecga acdfg gcbadf defab fdbecg eagdcf gbefcda | ce bgafdec cage aceg',
    'cgf cebfgd bgced daegcb bgcef abfeg fc egfbacd dcbf dcgefa | agdecbf gcf abcedfg dcgbe',
    'cgfde bgdeaf ebcd cfe efgbd ce afgebc cgafd efdcbg edgabfc | dcgef fgcabe fgbdeca abfegc',
    'gecad be gadbf fdbgea dgcfba ebcgfa geb febd gcadbfe gedab | fedb fbdga eb eb',
    'gebafcd ea aced badfc bafde cdgbfa geacfb egbdf fea fbaecd | aedc gcadbef bgacfe fae',
    'cdaeb bgafed bacegd adc daebg efbca dbcg fgadce dc cdgafeb | dca gfdeac gbcd bdeafcg',
    'aefgd ce dfcaeb cgdfbae gebcfa gcbdaf fce bdec ceadf acdfb | cfeda ce gbafecd aegfd',
    'bedfa fce ecfba ebcfag bedcag fc cagf geabc febdgc adcgefb | cagbef cef gcdebf fec',
    'cdegba fe bacdfe bfgdae cdgebfa edbac fed fecb fagcd fedca | def cabdef cfeda bgfaecd',
    'edfcb dcbg ecadfb agcdef afegb gfd gd dfgbe ecdfgab cfbgde | bgcd cdeabf dgf fgd',
    'daceg fecdag dfbca gb bfcegd bgc afbgdec adbgc geab gcaebd | gdacb agbe cfebdg bg',
    'agfbec deagbfc cbgda adbce deag dfacbe fdgcb dcgbea bga ag | adbgcef decabf cgbfd cabed',
    'bgdf df bgceda aedbgf abgedfc cgafe adbge gfade bdcfae fde | gbdf geacf baedg cbfead',
    'beacdf egfa afecd ga gca gbdec cagfde cdfabg aegcd cdfbgae | bgcde egbcd cdega dcbeg',
    'fbc abfedc bagce fb fcgdea cdgabfe bdgacf bdfg cfbga cdfag | acfbg egacb dfacg fcb',
    'dgbafe efdgbc gdc deafc bfgcad cg bdefg defgacb ebcg egfcd | bcfgda gfbead cdg dfgebac',
    'aceb bdfega bdfgc bdage ec dcfgeab cdagfe bagcde ecg ebdgc | ebac bgaed gec ec',
    'cfbega ab dgebca fgacbed bcgedf fgab abcef fcade fcebg acb | fadcebg cab abefc dcfgeba',
    'deacbf fgeab ecdbgf bad fdbgcea eagdb cebagd dagc dbgec ad | gbcdae agdeb dcabef gacd',
    'gefcda dga aedbc afbegd edgab fgab gedbfc cfebadg gdefb ga | ag afbg becda dag',
    'dbfcge baedc ebg efag dgbaef agfbd fagcbde fdagbc ge geadb | eg adefgb bfdgce gdfceab',
    'ebcfgda cg cgfe dfgeac fdcabg agedc agfed dgc adcbe bgafde | aebfcdg agdef gefadbc dagefc',
    'dagef gedafcb ecafd cgfabe dg efgadb dbga dge efagb cgdfeb | dbfgce fdaec eabcfg dgba',
    'acbdf dbfagc dabgc bgedca bcdfeg cf bfc efbgacd gcfa debaf | ecdabgf cbf fcbaged fcbgde',
    'bdfega aecbf cadf gecbf cae dfabe ac gdacbe febcgda dbecfa | fgbade ca adbef dcfa',
    'cbdaef ebadf gdbefa eafg aefcgdb gab bacged fdgab ga bgdfc | ga cfgadeb dabgce bag',
    'gd aedcfg cadfe dgfbec adegf eafbg gdac bfcaedg ecadbf fdg | fdacge gd gefad egadbcf',
    'dfaeg bafged fdgec adefgc ebcgf edc bdeacg cd cfdgeba afdc | bcgdefa caegbd cd adegf',
    'cfd cadbf gcadbf cbgd defgba dcegaf egbfacd dc badfg fbace | afcgde afbgdce adbfc dc',
    'fgbed fcaeg fbgcda cb cbg efabgd bdfceg debc cabedgf egfcb | gbdcfe edcb aefcbgd edcfgab',
    'efgabdc fcdba gbcaf fgdbae ag dgac ebfcg edbacf agb dgcabf | bag ag ga cdga',
    'dcbfa bfcaegd fda fabg acdbe gcfedb faecgd gfbadc fa bcfgd | dbcgfa dfa afd fdbca',
    'aec bgdaec gbdca efdgbac ecgad ecfdg eabfcd cbgadf ea bega | ace ae efbadc eagbcdf',
    'fgca dgfeb bacedf beadfcg adf cbgad gabfd gdfcba af agdcbe | daf facg facg fcga',
    'becgfda fgae geafdc dagcfb aecdf ecf fe befgcd ebcad cadgf | gfea geaf fgbdcae adbgcf',
    'dcebag agdce cafbedg eda adebfc cfedg dgcab cdagbf ea abeg | ead gdcbae ea dae',
    'gaebfd abgefcd fgeadc bgedca cbdgf ceaf gdcef efd ef dgace | geadbcf edf aecf afec',
    'afd beadfc facgeb da dgcfba dabefgc ebfdg gdabf dcag fbgca | ad cdga afd efdgb',
    'abdge agfcebd feabcg dgbef bgacdf bdcfeg fe bfdgc bfe cefd | fcde efb gbdcf ef',
    'gdbcf cafbd ad gbad aebcf cbfegd gdcafeb fegdca adc bgdfac | efbdgac abdg gafedbc acd',
    'gdea fdaecb cda fgdec gcbfa eacgfd gcefdb da gaebcfd adcgf | da ad aebcdf ebadfcg',
    'faebdcg bagfc debcag acgef fgbace abc dfacge bgdfa bc cbef | cgefa cab bcef cb',
    'fgaceb ea afe gcaefd dfbecg bage dbfca fbeac gebcf daecfgb | aef efa cgebfad efcbgad',
    'cfgde aegcbf fce fabdcg edfb cgebdfa dcgfeb ef gdeca fdcbg | fe ef ef ecagbfd',
    'agebcd fecgabd facg dcbfe agefb cebgfa aec badefg ac cbaef | ac cgaf ac begfa',
    'cfebag bea aedcf eb ecfbad adfgec cgbad dfeb dfbaceg adceb | dbef eb efdcgab eb',
    'gdfcba efadcg fdcga bdfae cgbd gb afbgd gebdcaf agfbec bfg | fgb bcgeaf bg gfb',
    'eafbd ceafbg dgb caebfgd cgbfe fgcd acbedg ebdfgc dg ebfgd | fcdg cfgd gbd dbg',
    'gbfce fag aedg ag gafec bcgfda efdca gfdaceb fdegac cedfba | bgdafce cbdefga aefcg fagec',
    'cedfa fgcbe acfedb ag cegfa dacfge dgaebc acg afbecgd gafd | gadf cga gdfeca degcab',
    'cegfb gf dgefbc cbfade dfcg fbg cedbf bfgdae fcdgabe aecgb | gbf bfg efdbc efgabd',
    'acdeg fdbae gcebdfa efgcba cdgb ebg gdabe acgebd gb fcdgea | bg geb beg afgdce',
    'bd cbgedf ceafgb agecb bdac daefg befcdag ebd cdaegb dbage | aebcgf bde bed gceab',
    'ad adbg beafc dbcgf gfebacd fbdac dgacfb gecdfb adf cedafg | gdab beacgdf daf da',
    'adcbge febadg dbgcf bace eb edcga ebg gfcdabe egafcd gbdce | gbe defacg cdfbg geb',
    'dfgea fgceb ac egcadf aegfc deac cag bfeagd bfdgca ebafgcd | dgbaef gcfae bdefag gcafe',
    'fagce dga feadg fgcdbe acdbegf bafd da gbfed bgcdae bfagde | da dga dag fdab',
    'dafbe fdcabe cafbd cfde dc cabgf edagcb acd bcgfade gbeafd | adc dfaecgb bgcaf cad',
    'acdgf adgcfe bg fgb gbdcaf fbagc dgbeaf gcbd faedbcg efbca | bg gb cdgb abdgcef',
    'adbecf gcfdeba acdge dfab befdc bagfce af dcfae fca bedfgc | acf fa cfa cfa',
    'eabgcf agc cafgdb adgbf dcfa edcgb ac bdegaf abgcd gedfcab | ca fcegab bgcdfa acebdgf',
    'gcbfde bg gdba bafeg bafde cfaeg cfbead gbe fgebad abecgfd | beg fdgaebc bge cebgfd',
    'ad fadcb fbdce acd faed dbfegc cbdafe ecbdafg decbga cbafg | da gadecb bcfdae cad',
    'dcfgea defbg becgdaf eadb edafgb be gafde feb fdbcg gfebca | eb afdegbc bef eb',
    'egcdb ae fbdeac bgace fabgc edgbcf eac bacfegd eadcgb geda | fcdeba gdea ace ea',
    'befd dcgeaf cbdage bgfceda fbcag be daegf agbfe febadg bea | eb edafgbc acbged ebfga',
    'dbfgcea abfecg bga dgca ecabd ebcfda gdbef ag bedga gadbec | agcd befdg bga cfedba',
    'da agfde fbega fda bgdeafc cgad cdfgbe efgcad afedbc decgf | cdgbfea dagc ad daf',
    'bfcadg aecgfb fgade cbafg fdcgaeb db bdg agfbd adbc bfdgce | dfage bd bacd gafbd',
    'bcdfge eadfg fcda dfegcab fdbgea cfg egfca fdgace baegc fc | fcebadg edafcgb fgc fc',
    'fbdac gadbfc fedbca bfage feabd ed eda aebgdc feadcbg ecfd | ed efdc dcef fecadbg',
    'abdge abgdce fg efdga dgeafb dgfb fge ceafd bdefgca fagebc | aebdg feg dbfg cedaf',
    'dgcf caefb fceadgb fd cdbfe fgbced begdfa cdgbe agbedc dbf | dbf bface edcbag dbacgef',
    'bgafe bf gbfcad gadef egfdba baegdfc bedf fgb becag defcga | dfbe dfagec cegdfab bf',
    'ed cgfaebd edbgca dgabe dcbagf dbgcef agfbe dacgb egd aced | dge egd degab abcgfd',
    'bfgeca edcbg deabgf afdge adebcgf fb fgbde fgb adfb fcaged | bafd afcgbe gbf bf',
    'bg afcdb gedfc afecbg cdbeagf dgeb cegafd gbfdc gfb cfedbg | gb gb gfdcea cfbgd',
    'gf fbgc gbcea gef abgecd efcag fdcea gfcaeb gebfdac fgbeda | gebcda degfbca gef cfgea',
    'fadebcg dfecag dcbaf cgdfb bg cfgbde fcged bgc gefb dgcbae | acgbde cgb fbge becgadf',
    'gdba fbcgea dcaegb abecg eadbcf ad afcedgb agcde fcedg acd | cageb dac adgce adc',
    'ebdca fd dcfbe efbcad afdb ecbgda aecdfg fdc cbgef efdcbag | dbaf df cbadgfe bdaf',
    'dgcbafe ef gaefcb bfgead ecfag gadec gcabf gfbdca fceb afe | afbcg ef dagec cgeaf',
    'abegc badgce gecfdb gb dagec gdab dcgafe dgfabce ceabf geb | gb dcagbe cbaegfd acefdg',
    'adec cbgde cdg egbdaf edabgfc adegb cd cegfb gdceab cfbdga | dc cd cd dcae',
    'fbadcg abc ba cfbge abed afgecd aecbg adcegb gaecd fgbdeac | acdbgf afdbegc bgafdce acb',
    'fa febgc cgfead ebgcdaf abged beafcg begaf aef ecgdfb bafc | fgbea acbf gbfeac afcgdbe',
    'bcadg baced gbfcde ec aegc cgedfab dec aedbf dbacgf abcedg | adbcg ce fagdcb adbcfg',
    'fdgcba acdg befacd bcg bgdef gbceaf gedafbc dfcba dgcfb gc | facdb gbc bdfeac gdfcbae',
    'cd gdce aedcfb fabecgd gdacfe cad adgcf gfbac gbafde deafg | dac cdbgefa cd dfcgeab',
    'aebdfg fgcadbe gcafbd eadfb ea abfgd bedagc eba fecbd eafg | cebfd dcbgeaf becgad ae',
    'edagfc cagdbef eadbfc ga fagec gdae efbgc cag gdcabf feacd | acg cga cgfdea ga',
    'agebdc bagde efg ecfadgb gbfeac fdage fg bfdg geabdf efacd | afgedb cbegfa adbegc fg',
    'dgcfb gacbed bgaefcd eb defac bfae bdecaf cbedf fgdeac cbe | eb ecb gbdcf egdcba',
    'bg dcegbaf bcafeg aecdgf gbf gfecdb gaeb eacgf fdcba cafbg | bfgdec gbf aebg bg',
    'aeg abfdcg gefcdba bgfe bcgaf edafc aecgf ecabgd cbafge ge | age acgbdf eag egabdc',
    'bafgde gefbcd caegfdb cdb fbcad gbfad cb dfcae fbacgd cbag | gcab afcdb bc cdbgaf',
    'cbgdf fda ad acgd agbdf dfaceb bcdfge agfcbd efgbacd gafbe | dfa dfgbec ad fad',
    'gfdca edafgc ge fbedcag ebfgad dbacgf beadc gfce eag gecda | gacde cegf acgbdf cbgadf',
    'cdb dfgec dacefb cfdeb cbaefg ecbadg bafd afceb bd abdcefg | ecbadf bcd bd afceb',
    'gbed be cdfbga bef ecbdfa gdbaf bdfage bgefa fcgae gefabdc | fbagecd gdfab gbdfa gdbe',
    'dafeb gfedb bcegf dg edagbf dagcfe fdg gebdacf dcfbea gdba | gfd bgad gd febgad',
    'gbcdaf aedfcbg dcge dcagf gecfda fde fgdbae fabce eadfc de | decg ecdg gdec de',
    'bfcga cfeg begdca ebcfag bdacef aecbg fac fc fbgda febcagd | efcg cf abdgec gfabcde',
    'cgfb fca dfceag bcfae gcabdfe begaf cf befacg acedb afdegb | egdbfa acf acbed fc',
    'bedgfc ab fabe acfgd cgbdea fdacb fdeabcg bac fbcde edacfb | bfae efcadb dfgca cba',
    'bcgeadf cfadg fge bdacfg eacfg bcedfg ef edfa cbgea cdefga | ef ebafgdc efcgbad adef',
    'dfgec fcdgaeb befc fb afdegc bgcdf dgbaef gbf cgbad cebgfd | bfg fb cbfedag ebacdgf',
    'ceabfdg dfe dfcg gedaf afgce ebdga egcbfa edafbc df gdaefc | abcedf ecfagbd gaecfbd gcfd',
    'degfb fa fdeab acfb deacbf gdcbea fad bacde efacdg bfdcega | adf dbace gfedcba gcebda',
    'badegfc fcebg fd fbd fdeg afcdeb gfeabc fgcedb bdagc cdbgf | dbf dbf fdb fedg',
    'eabcfg cefbdag cgebfd cafge deac gde adbgf decgfa de edafg | fdage adce de de',
    'acbdeg cdfgba gac dbega adfbge cdeg acbgdef gaebc cg afebc | dcgfba acg ebagfd bdecagf',
    'bfadcg bgcda ega gdcef gdbecaf ea edba egadc gebcfa gadbec | ae bade gdcaebf eadb',
    'fe efcagbd cfgbd efdb gef gfced decga gbcedf gdfbca aebfgc | ceadfgb dgbacf cgbdefa egf',
    'gd fbcgda gad gbdfa dfcg ceadbf acgbdef ecgbad faegb bdfac | gfcdeba dg abfcd fbgae',
    'becgad egc ce edfgabc caef bgfdea cebgf faebgc fdgcb gbafe | ceg febag abgfe ec',
    'abdef acdfbe gbdcea egbcf abefg gedacfb ga adgf gae aebdfg | gfad ga agdf gea',
    'befdcg adcf fcdegab debcf aegfb dae cadbef da bfdae bdecag | gbfeacd gdbefc ad ad',
    'dabgcf fgbdeca gecfbd fcdge gfbe bdgfc dcefa eg bagdec egd | edg dge dge dge',
    'afd dagbc ceagdf fa cadbgf fbga badgec fdeacgb fcebd dfcab | bcdgea fad fbecgda af',
    'dfecga cagbde fcdaeb dfgc afegc cf fec bgaef edacg fcegdba | aebgf gceadbf ebgdac cbfeda',
    'gceaf gcbe bfecga beagfd cabgfed gfcba fcadb fgb gdcaef bg | abcfd egcb begc cegabf',
    'gcf adfebcg dcbeg fdgacb gfceab fg gafe acbef bcadef cgefb | bcegdfa cebdg fgc fgc',
    'dgbafec caf af gfcea cbgea efcgd aefbcd gecfba bgfa aegcdb | caf cegdf af agbced',
    'cgfd gd fedbc dbfaec fedbg adbgce bgefcd bgfae gbedafc gbd | ecabdfg cdgf gdcf bdacge',
    'bgc bcdfa becgaf gc dbegf fdcabe dgbfc cagfbd cadg fdabgec | fdcgb cdag gc cdfba',
    'fbgcda gdce bcg acdefb aebcfdg fegba cg cbefd bcfge fgbecd | becgf cgb bgc bgc',
    'afebg dceab aefbdg edgba agcdbf gd adg edfcgab fged fbgeac | cbagfd cgadebf agecfb deacb',
    'bagcdf bcafde gabe fdabe dbegaf ag dgeaf agd facdbge fedgc | dbface gad baeg agbe',
    'df gabfc afgcbed edgf gcbdea bdf ebdfcg fbcdae cgdbf bgecd | ebgacd dgfe adbfgec gdbfc',
    'gadcb cgfd fadbce gbd bfcda fcbagde cabeg cdagbf dg faebgd | gadcbef dfgc fgdc dbg',
    'dcagb cdfeba feacd fgdeac cge ge dgfe bafcge agced gceabfd | deafcb fedg gdef gacbd',
    'dc befgda dcgf gceba edc cbdge daecbf daefbcg ebgfd ebcgfd | edc baefcgd ceafbd dce',
    'cfdab edag afdcebg gba ecdgb ag fecgba bgdca egdbcf aebdgc | bagdc bafdcge gcdafbe aedg',
    'dgfecb bdfage abe defbc ae fabgecd efac fdbcea gbcad dcaeb | abe cefa gfedcb adecgfb',
    'dcegba fd adfgce caefb adgfeb fagdecb gfdc dfeca gdeca fed | fd dfe efacd gdcbea',
    'dafbec gbefd gcdfba edagcbf fegcba abfed efa fdcba dcea ae | fea afe fdaeb adce',
    'af bacf gcaebd dfgeb ecfdga bdaef aebdc decabf afe cegabdf | af bafc fea af',
    'cdefbg ce acef gce cbgad afdbge fedacg dceag efagd bgadcef | ec cfea dcgfbe feac',
    'gfbcd afbgd fgbaed abg ba geadf gdcbaef dbceag afbe feagdc | ab bdacfeg ab bga',
    'cfgea defcga feacbg cfabe gcbafd fbc gfbe baedfcg deabc fb | agcdfe bfge fdgabc ecgbfa',
    'gbdcea gbdf fgecb fbcdage agefc bge fedbca efgbcd bg debcf | dcgfeb cgaef bcdfe gabfdec',
]


function main(input) {

    const arr = new Array(10).fill([]);

    const firstDigits = input.split('|').join('')
    const digits = firstDigits.split(' ').filter(Boolean)
    digits.forEach(d => {
        arr[d.length] = [...arr[d.length], d];
    })


    const top = _.difference(arr[3][0].split(''), arr[2][0].split(''))

    const middle = _.intersection(arr[4][0].split(''), arr[5][0].split(''), arr[5][1].split(''), arr[5][2].split(''))

    const topLeft = _.difference(arr[4][0].split(''), [...arr[3][0].split(''), middle[0]])

    // compare 3 to 1 
    let checker = (arr, target) => target.every(v => arr.includes(v));
    const three = arr[5].filter(e => checker(e.split(''), arr[2][0].split('')))
    const bottom = _.difference(three[0].split(''), [...arr[2][0].split(''), ...top, ...middle])

    const zero = _.difference(arr[7][0].split(''), [...middle])
    const bottomLeft = _.difference(zero, [...top, ...topLeft, ...bottom, ...arr[2][0]])

    const two = arr[5].filter(e => checker(e.split(''), bottomLeft))
    const topRight = _.intersection(two[0].split(''), arr[2][0].split(''))

    const bottomRight = _.difference('abcdefg'.split(''), [...top, ...middle, ...bottomLeft, ...topLeft, ...topRight, ...bottom])


    const buildNumber = new Array(10).fill([]);
    buildNumber[0] = [...top, ...topLeft, ...topRight, ...bottom, ...bottomLeft, ...bottomRight]
    buildNumber[1] = [...bottomRight, ...topRight]
    buildNumber[2] = [...top, ...topRight, ...middle, ...bottom, ...bottomLeft]
    buildNumber[3] = [...top, ...topRight, ...middle, ...bottom, ...bottomRight]
    buildNumber[4] = [...topLeft, ...topRight, ...middle, ...bottomRight]
    buildNumber[5] = [...top, ...topLeft, ...middle, ...bottom, ...bottomRight]
    buildNumber[6] = [...top, ...topLeft, ...middle, ...bottom, ...bottomLeft, ...bottomRight]
    buildNumber[7] = [...top, ...topRight, ...bottomRight]
    buildNumber[8] = [...top, ...topLeft, ...topRight, ...middle, ...bottom, ...bottomLeft, ...bottomRight]
    buildNumber[9] = [...top, ...topLeft, ...topRight, ...middle, ...bottom, ...bottomRight]


    const lastDigits = input.split('|')[1].split(' ').filter(Boolean)

    const number = []
    for (let i = 0; i < lastDigits.length; i++) {
        for (let j = 0; j < buildNumber.length; j++) {
            if (lastDigits[i].split('').length === buildNumber[j].length) {
                if (checker(lastDigits[i].split(''), buildNumber[j])) {
                    number.push(j)
                }
            }
        }
    }
    return +number.join('')
}

const red = input.map(i => main(i)).reduce((acc, curr) => acc + curr)
console.log(red)