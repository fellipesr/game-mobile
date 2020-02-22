import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Start from './pages/start';
import Game from './pages/game';

const Routes = createAppContainer(
    createSwitchNavigator({
        Start,
        Game
    })
);

export default Routes;