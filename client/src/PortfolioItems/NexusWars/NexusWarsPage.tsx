import style from '../page.module.css'
import MyCollapsible from '../../components/MyCollapsible';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useEffect, useState } from 'react';
import codeStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import customCodeStyle from '../../customCodeStyle';

const NexusWarsPage = () => {

    const [pathfindingCode, setPathfindingCode] = useState('');
    const [battlePhaseCode, setBattlePhaseCode] = useState('');
    const [interactionsCode, setInteractionsCode] = useState('');

    useEffect(() => {

        fetch('/Portfolio/NexusWars/PathfindingCode.txt')
            .then(res => res.text())
            .then(text => setPathfindingCode(text))
            .catch((e) => console.error(e));

        fetch('/Portfolio/NexusWars/BattlePhaseCode.txt')
            .then(res => res.text())
            .then(text => setBattlePhaseCode(text))
            .catch((e) => console.error(e));

        fetch('/Portfolio/NexusWars/InteractionsCode.txt')
            .then(res => res.text())
            .then(text => setInteractionsCode(text))
            .catch((e) => console.error(e));

    }, []);

    return (
        <>
            <div className='text-center'>
                <img className={style['page-image']} src='/Portfolio/NexusWars/gameplayDemo.webp' />
            </div>
            <div className='m-4'>
                <h2>Summary</h2>
                <p>
                    Nexus Wars is a simultaneous turn-based strategy game in
                    which players command a growing army to take control of
                    resource nodes and points of advantage. It is developed on
                    Roblox in the Lua scripting language.
                </p>
                <h2>Basic Gameplay</h2>
                <p>
                    Each turn consists of two phases: The command phase and
                    the battle phase. Players take turns at the same time,
                    eliminating the need to wait for several other players
                    to take their turn. This has resulted in much more
                    fast-paced and engaging gameplay. After the turn limit has
                    been reached, the player with the highest score is declared
                    the winner. Players increase their score by earning
                    resources from nodes and eliminating hostile units.
                </p>
                <p>
                    During the command phase, players issue orders to their
                    units. The units won't take any action until the battle
                    phase.
                </p>
                <p>
                    During the battle phase, all units are loaded into a randomly
                    ordered list, and take their actions in that order until
                    all units have fulfilled their commands, or are
                    stuck and unable to take action. The following code snippet
                    handles this logic. This function determines whether all
                    units are finished or stuck based on whether their action
                    functions return true or not.
                </p>

                <MyCollapsible
                    title='Battle Phase Code Snippet'
                    content={
                        <div className='code-text'>
                            <SyntaxHighlighter language='lua' showLineNumbers='true' style={codeStyle} customStyle={customCodeStyle}>
                                {battlePhaseCode}
                            </SyntaxHighlighter>
                        </div>
                    }
                />
                <br />

                <h2>Pathfinding</h2>
                <p>
                    The game involves varying elements of complexity when it comes to
                    moving through obstacles toward a destination. It uses the A*
                    pathfinding algorithm to help units navigate the obstacles on
                    the game board.
                </p>
                <p>
                    Units move across a square grid with spaces of varying
                    elevation, and units cannot climb spaces that are too steep.
                    They also cannot move into occupied spaces. The path might
                    also change during each battle phase as units move around
                    and are destroyed. Sometimes, units such as builders and miners
                    only need to reach a nearby space to their destination, including
                    corner spaces.
                </p>
                <p>
                    The following code is my implementation of the A* pathfinding
                    algorithm, and is designed to account for various complexities
                    including the ones mentioned above.
                </p>
                <MyCollapsible
                    title='Pathfinding Code Snippet'
                    content={
                        <div className='code-text'>
                            <SyntaxHighlighter language='lua' showLineNumbers='true' style={codeStyle} customStyle={customCodeStyle}>
                                {pathfindingCode}
                            </SyntaxHighlighter>
                        </div>
                    }
                />
                <br />
                <h2>Client-Side Visuals and Interaction Expidition</h2>
                <p>
                    Nexus Wars subverts Roblox's typical replication paradigm
                    and produces all visual effects on the client, resulting
                    in smoother effects. Furthermore, the battle phase is
                    visualized more quickly due to an algorithm that allows
                    visual effects to occur concurrrently and out of turn as appropriate.
                </p>
                <p>
                    Logically, all actions performed during the battle phase occur in
                    strict sequence. The problem with this is that the battle
                    phase could normally take a very long time. Units on one
                    side of the map taking unrelated actions to units on the
                    other side might have to wait for the other units to take
                    their actions, if the actions were displayed in the same
                    order they occurred logically.
                </p>
                <p>
                    The following module and algorithm allows unrelated actions to be
                    displayed concurrently to others so as to reduce the duration
                    of the battle phase. For it to work properly, it is required
                    that actions provide a list of each space coordinate involved
                    so that the algorithm does not display visuals in an
                    incorrect manner.
                </p>
                <MyCollapsible
                    title='Interaction Visuals Code Snippet'
                    content={
                        <div className='code-text'>
                            <SyntaxHighlighter language='lua' showLineNumbers='true' style={codeStyle} customStyle={customCodeStyle}>
                                {interactionsCode}
                            </SyntaxHighlighter>
                        </div>
                    }
                />
            </div>
        </>
    );
}

export default NexusWarsPage