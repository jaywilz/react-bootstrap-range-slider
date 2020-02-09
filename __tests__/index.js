/**
 * MIT License
 *
 * Copyright (c) 2020 Jason Wilson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react';
import renderer from 'react-test-renderer'

import RangeSlider from '../src/index';

describe('RangeSlider', () => {

  it('should render correctly when only required props provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when tooltip = off', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when size=sm provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          size='sm'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when size=lg provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          size='lg'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when disabled', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          disabled
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when +ve min provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          min={10}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when -ve min provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          min={-10}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when max provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          max={20}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when min and max provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          min={10}
          max={20}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when step provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          step={25}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when variant provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          variant='secondary'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should pass inputProps to input', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          inputProps={{'data-a-prop':'test'}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when tooltip = auto', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='auto'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when tooltip explicitly = auto', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='auto'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when tooltipPlacement = top', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltipPlacement='top'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when tooltipPlacement explicitly = bottom', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltipPlacement='bottom'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly with tooltip label', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltipLabel={value => `${value} km`}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should pass tooltipProps to tooltip div', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltipProps={{'data-a-tooltip-prop':'test'}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should pass tooltipStyle to tooltip div', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltipStyle={{'background':'blue'}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly with bsPrefix', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip='off'
          bsPrefix='a-prefix'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 0', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={0}
          onChange={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 50%', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={50}
          onChange={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 100%', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={100}
          onChange={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 0 when size = sm', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={0}
          onChange={() => {}}
          size='sm'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 50% when size = sm', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={50}
          onChange={() => {}}
          size='sm'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 100% when size = sm', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={100}
          onChange={() => {}}
          size='sm'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 0 when size = lg', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={0}
          onChange={() => {}}
          size='lg'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 50% when size = lg', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={50}
          onChange={() => {}}
          size='lg'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 100% when size = lg', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={100}
          onChange={() => {}}
          size='lg'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 0 when min and max provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={10}
          onChange={() => {}}
          min={10}
          max={20}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 50% when min and max provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={15}
          onChange={() => {}}
          min={10}
          max={20}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should correcly calculate tooltip left position at 100% when min and max provided', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={20}
          onChange={() => {}}
          min={10}
          max={20}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

});
