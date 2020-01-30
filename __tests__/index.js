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

  it('should render', () => {

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

  it('should render with tooltip', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render with tooltip label', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip
          tooltipLabel={value => `${value} km`}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render with tooltip placement = top', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip
          tooltipPlacement='top'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render with tooltipId', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          tooltip
          tooltipId='a-tooltip-id'
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render with id', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          id='a-slider-id'
          tooltip
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render with size = sm', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          size='sm'
          tooltip
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render with bsPrefix', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          bsPrefix='a-prefix'
          size='sm'  
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render when disabled', () => {

    const tree = renderer
      .create(
        <RangeSlider
          value={25}
          onChange={() => {}}
          disabled
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

});
