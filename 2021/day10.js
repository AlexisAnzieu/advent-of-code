const input = [
    '({{[<{[{[[<([[<><>][{}()]]<([]{})[<>()]>)><<<([]())>>{([()<>][{}{}])<[<>()]{()()}>}>]<(<[[[]<>]({}{})]{{{}<>}',
    '[(<<<[[[{({(([{}{}]<()<>>)[<()<>>[[]<>]])}([{{<>()}}]))}<[{{[<[]()>][[<>()][[][]]]}{{(()()){{}{})}}',
    '<(<(<<{<(({(<[()()]<<>[]>>((()[])(<><>)))}))[{<{<[(){}]>}><[<{{}[]}{[][]}>(<{}{}>)]([(<><>)(<>{})]{{(){}}[<>(',
    '[{<[<{[[[<{<(<[]<>><<><>>)<{{}()}>>{[<()>{[]<>}]}}>[(<{[{}()]<<>()>}{(<>[])({}<>)}>)]]}{({<',
    '[<[(<<<([[[<(<<>{}><()>)(<[]<>>([][]))>(<{{}<>}{{}[]}>)]](<(<({}){<>()}>{<{}<>>})[{[{}<>][<',
    '[([(<([[[([([<[]()>[()()]]{{<>{}}([][])})<{<[][]>{()[])}[{<>{}}<<>()>]>][<[<{}<>>[[]{}]](<()',
    '{({{<{[[(<[[{[()()][()[]]}<{<>[]}<{}()>>]({<<>>}(({}{})(<>)))]<([[()[]]<(){}>]{{{}<>}([]<>)})([{[][]}{<>',
    '<(<{{([[<<({[<(){}>[()<>]]{[{}<>]<(){}>}}(<[[]{}]<[][]>>))<<[{{}()}][{<>[]}[{}<>]]>[([<>{}]{[]{}})',
    '[<{<((([{<(<(<{}>[{}()])>)<{[{<>()}[{}[]]][{[]}<{}()}]}((<{}>{[]<>})({()()}<[]{}>))>>}])))',
    '<{(<{((([((({({}<>)([]<>)}({()<>}[{}<>])){(<[][]><()[]>)<[{}[]]<[][]>>})[[{{<>{}}(<><>)}{[()()][()[]]}]])[[{',
    '{<[<[[[(({(<<{[][]}(<>{})>{<[]()><()()>}>(({[]<>}{()<>}){[()()]}))})<({{<(<>{})>[(<>[]){()',
    '([[[{{[<([<<({[]{}}{(){}})(<[]<>><[]<>>)>{{{[]}{[]{}}}}><[[[<><>]{{}[]}]]<<[{}{}][(){}]>{<()[]>[{}[]]}>>]',
    '{[[[<<({([<<(((){})<{}()>)[({}[])<()[]>]><<[[]{}]<<>()>>{(<>())}>](<<{[]{}}[<>()]>>[{({}<>)[()[]]}',
    '[<{{<({<<[(<<<{}<>>{[]{}}><((){})((){})>>(<[[]<>][(){}]>[<{}()>({}<>)]])]<[<{[[]()]({}[])}>(<',
    '<{(({{(({({<[<{}<>><[][]>]<{(){}}>>}[(<[[]{}](()())>[[()()][{}[]]])])<[(<[<><>](()[])><{{}{}',
    '[[(({(({([[<{<{}<>>{(){}}}{(<>[])<[]()>}>][[[<[]()>[()]][<<>{}><{}()>]]([([][])])]]<({[[<>[]][{}<>]]<{',
    '<<[{{{<<[<{<<[<><>]{[]}>>{<([]<>)<<>[]>>[(<>{})(()())]}}{<[{{}<>}(<>[])]>[[{{}{}}<{}<>>](([',
    '((({{[[<[([[<{()<>}({}{})><<<>[]><()<>>>]{{<[]{}>[{}()]}(<[]<>><()[]>)}][{{<[][]>}<[()[]]<[]()>>}])]>]]}([{{[',
    '[([{({<<[{[[{{()()}}[[<>()]([]())]]{{(()<>)[{}()]}{[(){}][<>()]}}]}]>(([{[{[[]{}]{[]<>]}]{{<[]<',
    '<(<(<({{<<([<{[]{}}[{}<>]>{<<><>>{{}{}}}])({(<<><>>((){}))({[]<>}<{}<>>)})>{{[<<()<>><[]()>><((){})<{}<>>>]<',
    '([{<{{[{([{[<[(){}]{(){}}><{[]()}[{}{}]>]({<<>{}>({}[])})}[{[{[]()}<(){}>]({[]{}}{()()})}(',
    '(<[([[(<([([<[[]()]>][<[()<>]([][]}>[(()[])<[]()>]])<{[<[][]>(()[])](([]()))}{[<{}<>>[[]()]]((()<>)',
    '[([((([<<{[({{{}()}(<>())}([()<>]<{}()>))<<(()[])[()<>]>{<()>}>]}{{((({}{})[{}<>])[{[]()}([]{})])<<{<>[]}(',
    '<([{(<<[(<({<<{}{}>{{}[]})<<<>[]><[]<>>>}(<([]<>)<(){}>>[[{}{}]<[]{}>]))>{([<<{}{}>>({[]()})])})](',
    '[(<[((<{[(((([[]]<<>[]>){<{}<>><()()>}))<[[{{}()}<<>()>]]>)]<<(<{(<>{})}{({}<>){{}()}}>([{()<>}{{}()',
    '<{(<<[{<<[({<<{}{}><()[]>>}){[([{}{}]([]{}])(((){})[[]<>])]<<<()<>><<><>>>([{}()]<[][]>)>}]>>(<(<({({}',
    '(([{{<{{(<{[{{<>[]}}({{}[]}<(){}>)]{(([]())[()<>])<[[]][[]()]>}}{<({(){}})<[{}{}]>>[((()()))]}',
    '[(({[<{([{[[{[[]()]<[]{}>}]{{<{}[]>{<>{}}}{(()<>)<()<>>}}][<<<{}()>(()())>>]}(([{{<>[]}[(){}]}[([]<>)<',
    '[<(<{{(<[(<<({()<>}<()()>)([<><>]<(){}>)>>)]>{<<[([[(){})<<>[]>])({<()>(()[])})][[({{}}(<>())){',
    '(((<<[<(([<[<[()()][{}()]>[([]())[[]()]]][<<<><>>{<><>}>{<<>[]>[<>()]}]>}{<{[[()[]]<()()>]{[[][]][[]',
    '{{(<<{(<[<({{<<>()>{{}[]}}([[]{}]<[][]>)}<(({}()){()()})>)>({<[[<><>]{[]}]{(<>())([]{})}>[[<<>[]>({}',
    '<<<[[[<[<{[[<({}())[[]()]><{(){}}{{}}>]][[[[{}[]]<(){}>]]<[{()()}<[]{}]]<(<>())[<><>]>>]}<[[({<>}<{}{}>)<',
    '(<(<[<<{<[({([[]{}]{[]}){[(){}](<>{})}}{[[[]][[]()]]})<[<[<>()]{{}()}>][((()[]){(){}})[[()',
    '<[{{{({(([{[{<{}<>>}<[{}<>]>]}]<([{{(){}}{[][]}}[<<>()><{}<>>]][{<{}[]>{()()}}])[({[{}<>][[][]]}{[{',
    '<[<{[([<<[[<[<()[]>[<>{}]]{([][]){[]<>}}>({{()<>}[()<>]}[{<>()}{<>{}}])]<<{({}())(<>)}[[()()][[]{}]]>>]>><(',
    '{[{<([(<<[[<[[<>{}}{{}{}}][{{}{}}[{}{}]]>][{([[][]](()[]))(([][])(()<>))}{[<<>{}>{[]}]{((){})(<>)}}]]{[<<<',
    '(({<<[<[<(<[<[<>{}]([]{})>(<[]<>><()>)][<[<>()]{()[]}>]>)[[[({{}{}){<><>})[(<>()){{}<>}]]]<<[<()[]>([][])]<<[',
    '<[({<<<<[{<<([{}[]][[]<>])[({}())<()<>>]>{<{{}<>}{[]}>[([]())({}()))}>}]{[<<<(<>())(()<>)>>{[<<><>>({}{})][',
    '<<((<{<{[{<<{<()<>>{<>{}}}>>}{<{{<<>>(()())}<{[]()}[()<>]>}{[<()>{<><>}]}>([<{[]<>}[{}<>]>{[[]<>]<<',
    '([<[<[<<{{{{{(()<>)[<>()]}[({}{})[{}{}]]}(((()()))<{<><>}>)}<[<[<>()]{<><>}>[{<><>}{()}]](',
    '[([[((<({{([[([]{}){{}<>}]([[]()]<<>[]>)][[<()()>{{}}]<((){})[<>()]>])<<{<[][]>}[[[]<>]<{}<>>]>{{({}[])(',
    '<(<<[<{{[([([(<>()}{()()}][{{}{}}[<>]]){<{<><>}<[]<>>>{{<><>}[[]()]}}]<<[([]<>)<()[]>]><[<[][]>]<[{}{}]{{}[]}',
    '[({(({(({{([{[{}()]<()<>>}(([][])({}))])({(<{}()>)}{{([]<>)(<>{})}})}({<[<{}<>>{[][]}]({<>[]}<{',
    '[([[<[[{{<(<{<()<>><<>()]}<<[]{}>([]())>><<[[]<>]{{}<>}>>)><([<({}())>((<>{})[(){}])][<<[]()>(',
    '[[(((<{({<<(<({}[])({}[])>[{[]{}}{<>{}}])[<<[][]>{<><>}>([[]()](<>[]))]>({<<<><>><[]()>>[([][])[[]{}]]})>}<',
    '{[<(<<[{{{{<<{{}{}}{()<>}>(<[]()>({}<>))>}({<{{}()}{()()}>(<[]{}>({}<>))}([[<>()]({}())}((',
    '{[{([{<([({{{[{}<>){{}}}(<<>{}>{<><>})}[<<()()><<>[]>>]})(<<{([]<>)<{}()>}>>)])(<{<((<()[]>{{}{}})){({[]<>}(',
    '<[[<(<{{{{{((<()<>>(<>{}))([{}{}]<<>[]>))<{<[]>(<>{})}>}}[(((([]<>){<>[]}))(({<>()}({}[]))))]}([{[<{[]',
    '{<({[{[{<{{{[[<><>]{{}<>})<<[]()>([])>}[{{<>[]}{()<>}}]}<<{<{}<>>({}<>)}[<{}()>[[]<>]]>[<<<>{}>[(){}',
    '<({({{([<[[[<{<>{}}([])>](<{[]}<[]<>>>)]]>)<[[<([<{}[]>[()()]]<(<>{})<{}[]>>){{({}<>)[[]<>]}<{{}{}}{()<',
    '<{<{({<<{{{(<{[]{}}(()())>({<>[]}(<>[])))<{([][]){{}()}}(<{}[]>)>}{[<<()<>><{}[]>>{{[]{}}[[]()',
    '{[<({<<{[(<{([{}[]]<[]<>>)<<{}[]>[()()]>}<<{()[]}{<>{}}>[[{}()]([]<>)]>>({[([]{})]<<[]{}><[][]>>}))][{[[<{[]',
    '[<<{<({<(<{{[{()()}<[][]>]{{<><>}({}{})}}}<<(<()[]>{[][]})[[{}()]]><[<<>[]>(()<>)][(<>{})([]())]>>>[[<({',
    '{{((([[<[<[[[{()<>}(<><>)](<{}()>({}()))][{<{}()>[{}[]]}{<{}[]>[{}<>]}]]({{[<>[]]<<><>>}([<>]{[]})}([({',
    '<<([[{[{[<(({[{}{}]<()<>}}[(<>{})[(){}]])([[{}{}]]{[()<>]<()<>>})){{[([][])<()[]>]}}>]((<(<({',
    '(<({[{[{(<<<<([]<>)<[]()>><{()[]}{{}()}>>{{[[]()](<><>)}({<><>}{<>{}})}>{([((){})(<>())]{<<><>>({}()}})([[{}',
    '<<<{(([(((({{<()())}<((){})[<>{}]>})(<[{<>{}}<{}()>]([{}[]][{}()])>[{{[]{}}{[]<>}}{{<><>}({}<>)}])',
    '(<{{[{{<([[[[([]()){(){}}][<[]()>{<><>}]]{[([])(<><>)]}]])((<[[({}{})[[]{}]]<({}){()}>][[(',
    '{(((({([<[<<<[()()](<>{})>[{{}[]}<<>{}>]>>([{<{}()>[[]()]}{({}())<{}()>}])]{({<{[]{}}<[][]>><[[]',
    '(<{[[<{{[((((<(){}><{}[]>)<{()()}<{}()>>)<<[(){}]>>}){(({{[]()}}<<<>[]>([]<>)>){{[<>{}]{[]()',
    '<<{{{<<[{<[<[{[]{}}[{}<>]]<([]{})[<>{}]>>({[()()]}(([][])[<>()]>)][{<<<><>>(()<>)>[{<>()}<[]{',
    '[[<[[[<([((({{{}<>}[()[]]}{([]<>)<{}()>})[(<<>()>{<><>})]))<[({(()()){{}<>}}(({}())<[]{}>))({<<>{}>[[]{}]}(',
    '{[[({[(<<{<((<{}()>({}<>))<<{}()><{}[]>>)>(<[<()()>(<>)]{([][])[(){}]}){([{}()]({}()))[[()',
    '(<({[{<{<({{{({}<>)}{[()<>]<{}{}>}}{<<{}{}>([]<>)>(<{}<>>{<>{}})}}{[{<(){}>><[[]()](<>())>',
    '[<{(({[{[<(<({[]{}}[<>])[{()()}(()<>)]>{{[[]{}]}<({}[])[{}{}]>})[{[[()]{<>{}}][<()[]>[[]()]]',
    '(<[{{<(<({{{({[][]}{()()}){([]())<[]{}>}}}{(<<{}()>{{}{}}>[(<>[])])}]{[<[<(){}><{}<>>]<(<>[])(()[])>>[[{()',
    '<<[<{[(<{({(((<><>))[[{}{}}(()())])<{<()[]>}>})<[{<<{}<>>(()())>[<<>[]>[{}()]]}{{<{}()>[<>{}',
    '<({((<([{{<[(<{}[]><<>()>)(({}()){[]{}})]{{<()[]>[()<>]}<{()[]}{[]<>}>}><<{((){})[{}<>]}{(()[]',
    '<{{[[<{<{<{{{[[]<>]}{{{}{}}<[]()>}}[<{()<>}(()())><<{}<>><()[]>>]}<([[<>()]([]{})]{{()}{<>[]}}){<<[]<>>>((',
    '<<({<{{[<{(((<(){}>{[]<>}){[(){}]})<({[]})[<()<>>{{}<>}]>)}><[({{<[][]>}}<{{[][]}<[]{}>}>>([(<{}<>>(()(',
    '{<([{((({<((<<[]{}><{}<>>>[{{}()}[[][]]]))[<{[{}[]][<>[]]}>[<<{}()>{{}<>}>((<><>))]]>}(((<([[][]){[](',
    '[[<{(<(([<[{(<{}[]>[{}<>])<<{}<>><<>()>>]<{[()<>]{{}{}}}{<<><>>[[]{}]}>]<(<{()()}<<>[]>><({',
    '([{<(<<<([[{[[[]()]({}[])]({[]{}}(<>[]))}<{[[]{}]({}())}>]{([([][])[{}<>]]([<>()]<()[]>))}](<({({}[])((){})}',
    '[<[{{[[[[[<({({}<>){{}{}}}{{[]<>}{<>}}){((<>())<[]<>>)[<()>[{}[]]]}>[{[[{}<>]]{{()<>}<()()>}>[[{[]<',
    '(<{{{<([([([[([]())<[]{}>]<<()><[]()>>])])(<{[<(<>())<{}>>]<{[{}<>]<{}[]>}(([]<>)(<>()))>}(({<<>{}>[[]',
    '{[(<[<{<<[{<<(()<>)<(){}>>[[<>[]](<>())]>{{[[]()][<>[]]}({{}[]}<<><>>)}}<<(([]<>)[()()])[[()<>][',
    '(<<[(([<([<<[[()[]]([]<>)]{(<>())([][])}>>{((<{}[]>{<>{}})[<<>()>])}]{([{{()()}<<>()]}{[[][]][(){}]}]',
    '{{<[<(((<(<{{([]())<{}()>}<<<>[]>{{}<>}>}<<<[]{}>>(<[]{}>({}<>))>><<{[(){}][[]()]}{{<>[]}([]',
    '[{{<[[([{[({[({}<>){{}()}]([{}<>]({}()))}(({()<>}<[][]>)({{}{}}{<>[]})))([([()[]][[]{}])]<<([',
    '([<(({<<(<([<([]()){(){}}>[([]{}){()[]})]{{(<>())(<>[])}<[<>[]][{}[]]>})><[[{(()<>){{}()}}{',
    '<((<<[{[[[[{[[<>{}][[]()]]{{[][]}<[][]>}>]]{({{[()[]]<{}[]>}<[<><>]<[]<>>>}<<<()<>>>[{()()}]>)(<<{<>()}>([{}',
    '([(([{([((<{<([]<>)<{}<>>>(<{}{}>)}{{[{}]{<><>}}[[{}<>]([][]}]}>){<<<[{}()][{}{}]>>>[[{<{}{}>[{}[]]}]<[',
    '{[[(<([([{([<[()[]]<(){}>>[(<><>)[()()]]])}<{[[(<>[])([]{}>]{[[]<>]<{}[]>}]}[(((()<>)<()[]>',
    '{{<(({([<<<<{([]()){()[]}}({()()})><(<()[]>[<>[]]}({<>{}}{[][]})>>{({<()[]>[{}<>]}((()[])(()<>)))}>>[(',
    '{([[(({{{[[{<[{}()]<<>()>>[[()<>]{[]()}]}<[<{}()>{{}()}]{[[]<>](<>())}>]{({<(){}>(<>{})}{<[]>[[]()]}){<(',
    '(<{<[(<[[<[{[[(){}][()()]]<[()<>]((){})>}[(<(){}>{<>{}>)]]{({{()}}{[{}<>]<<><>>})(({<>()}<{}()>)[{()}<<',
    '[([([<{<((([[<[][]>{[]()}][<()<>><{}()>]]({[{}()]}[<()()>{[]<>}]))<[(<()()><()[]>){{[]<>}[()()]}]',
    '{([<({[<((({(<{}<>>[{}()])<[<>{}]>})){{<<<[]()><[]<>>>{{<>()}[<>()]}>{[<()[]>[(){}]]})})<({',
    '<<<[[[((<{[{[([])[()<>]]((<>{}}(()()))}<{<[][]><[]()>}{<(){}>{{}<>}}>]<([<<>>]<([][])({}{})>',
    '<[[({[<([{<<<(()[])>{{(){}}<[]<>>)>>[{{{()<>}[{}()]}<{()[]}[()<>]>}<<{()()}([]())>[(<>()){<>{}}]>]}])[((((<{',
]

const openSign = [
    '(',
    '[',
    '{',
    '<'
]

const signsMatching = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
}

const points = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4
}

const checkLine = (line, isCorrupted) => {
    let signs = []
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (openSign.includes(char)) {
            signs.push(char)
        } else {
            const lastSign = signs.pop()
            if (signsMatching[lastSign] != char) {
                console.error(`Expected ${signsMatching[lastSign]}, but found ${char} instead`)
                return signs
            }
        }
    }
    if (!isCorrupted) {
        return signs.reverse().map(s => signsMatching[s]).map(s => points[s])
    }
}

const incompleteLine = input.filter(i => !checkLine(i.split(''), true));
const scores = incompleteLine.map(line => checkLine(line, false).reduce((acc, curr) => (acc * 5) + curr)).sort((a, b) => b - a)
console.log(scores[Math.floor(scores.length / 2)])