import React from 'react';
import { render } from 'react-dom';

import './styles/styles.styl';

const Root = () => {
    return (
        <div>foobar</div>
    );
};

render(<Root />, document.getElementById('root'));
