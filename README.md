# React Bootstrap Range Slider

New!

## Installation

    npm install react-bootstrap-range-slider

or

    yarn add react-bootstrap-range-slider

## Usage

```JavaScript
import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import ReactBootstrapRangeSlider from 'react-bootstrap-range-slider';

const [ value, setValue ] = useState(0); 

<ReactBootstrapRangeSlider
  value={value}
  onChange={changeEvent => setValue(changeEvent.target.value)}
/>
```

## License

[MIT License](LICENSE)
