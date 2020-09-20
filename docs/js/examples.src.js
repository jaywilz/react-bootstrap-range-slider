const { Row, Col, Form } = ReactBootstrap;
const RangeSlider = ReactBootstrapRangeSlider;

const SimpleSlider = () => {

  const [ value, setValue ] = React.useState(50);

  return (
    <RangeSlider
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );

};

const SliderWithLabel = () => {

  const [ value, setValue ] = React.useState(50);

  return ( 
    <Form> 
      <Form.Group>
        <Form.Label>
          My Label
        </Form.Label>
        <RangeSlider
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </Form.Group>   
    </Form>
  );

};

const SliderWithColumnLayoutLabel = () => {

  const [ value, setValue ] = React.useState(50);

  return ( 
    <Form> 
      <Form.Group as={Row}>
        <Form.Label column sm='4'>
          My Other Label
        </Form.Label>
        <Col sm='8'>
          <RangeSlider
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Col>
      </Form.Group>
    </Form>
  );

};

const SliderWithInputFormControl = () => {

  const [ value, setValue ] = React.useState(25);

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs='9'>
          <RangeSlider
            value={value}
            onChange={e => setValue(e.target.value)}
          />        
        </Col>
        <Col xs='3'>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </Col>
      </Form.Group>
    </Form>
  );

};

const Sizes = () => {

  const [ value1, setValue1 ] = React.useState(20);
  const [ value2, setValue2 ] = React.useState(50);
  const [ value3, setValue3 ] = React.useState(80);

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs='4'>
          <Form.Control
            value={value1}
            size='sm'
            onChange={e => setValue1(e.target.value)}
          />
        </Col>
        <Col xs='8'>
          <RangeSlider
            value={value1}
            onChange={e => setValue1(e.target.value)}
            size='sm'
          />        
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col xs='4'>
          <Form.Control
            value={value2}
            onChange={e => setValue2(e.target.value)}
          />
        </Col>
        <Col xs='8'>
          <RangeSlider
            value={value2}
            onChange={e => setValue2(e.target.value)}
          />        
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col xs='4'>
          <Form.Control
            value={value3}
            size='lg'
            onChange={e => setValue3(e.target.value)}
          />
        </Col>
        <Col xs='8'>
          <RangeSlider
            value={value3}
            onChange={e => setValue3(e.target.value)}
            size='lg'
          />        
        </Col>
      </Form.Group>
     </Form>
  );

};

const Variants = () => {

  const [ value1, setValue1 ] = React.useState(30);
  const [ value2, setValue2 ] = React.useState(30);
  const [ value3, setValue3 ] = React.useState(30);
  const [ value4, setValue4 ] = React.useState(30);
  const [ value5, setValue5 ] = React.useState(70);
  const [ value6, setValue6 ] = React.useState(70);
  const [ value7, setValue7 ] = React.useState(70);
  const [ value8, setValue8 ] = React.useState(70);

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs='3'>
          <RangeSlider
            value={value1}
            onChange={e => setValue1(e.target.value)}
            variant='primary'
          />        
        </Col>
        <Col xs='3'>
          <RangeSlider
            value={value2}
            onChange={e => setValue2(e.target.value)}
            variant='secondary'
          />    
        </Col>
        <Col xs='3'>
          <RangeSlider
            value={value3}
            onChange={e => setValue3(e.target.value)}
            variant='success'
          />        
        </Col>
        <Col xs='3'>
          <RangeSlider
            value={value4}
            onChange={e => setValue4(e.target.value)}
            variant='danger'
          />    
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col xs='3'>
          <RangeSlider
            value={value5}
            onChange={e => setValue5(e.target.value)}
            variant='warning'
          />        
        </Col>
        <Col xs='3'>
          <RangeSlider
            value={value6}
            onChange={e => setValue6(e.target.value)}
            variant='info'
          />    
        </Col>
        <Col xs='3'>
          <RangeSlider
            value={value7}
            onChange={e => setValue7(e.target.value)}
            variant='dark'
          />        
        </Col>
        <Col xs='3'>
          <RangeSlider
            value={value8}
            onChange={e => setValue8(e.target.value)}
            variant='light'
          />    
        </Col>
      </Form.Group>
   </Form>
  );

};

const TooltipBehaviour = () => {

  const [ value1, setValue1 ] = React.useState(20);
  const [ value2, setValue2 ] = React.useState(50);
  const [ value3, setValue3 ] = React.useState(80);

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs='4'>
          <RangeSlider
            value={value1}
            onChange={e => setValue1(e.target.value)}
            tooltip='auto'
          />        
        </Col>
        <Col xs='4'>
          <RangeSlider
            value={value2}
            onChange={e => setValue2(e.target.value)}
            tooltip='on'
          />        
        </Col>
        <Col xs='4'>
          <RangeSlider
            value={value3}
            onChange={e => setValue3(e.target.value)}
            tooltip='off'
          />        
        </Col>
      </Form.Group>
    </Form>
  );

};

const TooltipPlacement = () => {

  const [ value1, setValue1 ] = React.useState(25);
  const [ value2, setValue2 ] = React.useState(75);

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs='6'>
          <RangeSlider
            value={value1}
            onChange={e => setValue1(e.target.value)}
            tooltipPlacement='top'
            tooltip='on'
          />        
        </Col>
        <Col xs='6'>
          <RangeSlider
            value={value2}
            onChange={e => setValue2(e.target.value)}
            tooltipPlacement='bottom'
            tooltip='on'
          />     
        </Col>
      </Form.Group>
    </Form>
  );

};

const TooltipLabel = () => {

  const [ value, setValue ] = React.useState(25);

  return (
    <RangeSlider
      value={value}
      onChange={e => setValue(e.target.value)}
      tooltipLabel={currentValue => `${currentValue}%`}
      tooltip='on'
    />        
  );

};

const Disabled = () => {

  const [ value, setValue ] = React.useState(50);

  return (
    <RangeSlider
      value={value}
      onChange={e => setValue(e.target.value)}
      disabled
    />         
  );

};

const Step = () => {

  const [ value, setValue ] = React.useState(50);

  return (
    <RangeSlider
      value={value}
      onChange={e => setValue(e.target.value)}
      step={10}
    />         
  );

};

const MinMax = () => {

  const [ value1, setValue1 ] = React.useState(2);
  const [ value2, setValue2 ] = React.useState(0);

  return (
    <Form>
      <Form.Group as={Row}>
        <Col xs='6'>
          <RangeSlider
            value={value1}
            onChange={e => setValue1(e.target.value)}
            min={1}
            max={5}
          />        
        </Col>
        <Col xs='6'>
          <RangeSlider
            value={value2}
            onChange={e => setValue2(e.target.value)}
            min={-20}
            max={50}
          />     
        </Col>
      </Form.Group>
    </Form>
  );

};

const AfterChange = () => {

  const [ value, setValue ] = React.useState(50);
  const [ finalValue, setFinalValue ] = React.useState(null);

  return (
    <>
      <RangeSlider
        value={value}
        onChange={e => setValue(e.target.value)}
        onAfterChange={e => setFinalValue(e.target.value)}
        tooltipPlacement='top'
      />
      <div>Final value: {finalValue}</div>
    </> 
  );

};

ReactDOM.render(
  <SimpleSlider/>,
  document.getElementById('simple-usage')
);

ReactDOM.render(
  <SliderWithLabel/>,
  document.getElementById('with-label')
);

ReactDOM.render(
  <SliderWithColumnLayoutLabel/>,
  document.getElementById('with-column-layout-label')
);

ReactDOM.render(
  <SliderWithInputFormControl/>,
  document.getElementById('with-form-control'),
);

ReactDOM.render(
  <Sizes/>,
  document.getElementById('sizes'),
);

ReactDOM.render(
  <Variants/>,
  document.getElementById('variants'),
);

ReactDOM.render(
  <TooltipBehaviour/>,
  document.getElementById('tooltip-behaviour'),
);

ReactDOM.render(
  <TooltipPlacement/>,
  document.getElementById('tooltip-placement'),
);

ReactDOM.render(
  <TooltipLabel/>,
  document.getElementById('tooltip-label'),
);

ReactDOM.render(
  <Disabled/>,
  document.getElementById('disabled'),
);

ReactDOM.render(
  <Step/>,
  document.getElementById('step'),
);

ReactDOM.render(
  <MinMax/>,
  document.getElementById('min-max'),
);

ReactDOM.render(
  <AfterChange/>,
  document.getElementById('after-change'),
);
