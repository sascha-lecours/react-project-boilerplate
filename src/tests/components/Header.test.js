import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header startLogout={() => { }} />);
	expect(wrapper).toMatchSnapshot();
});


let startLogout, wrapper;

beforeEach(() => {
	startLogout = jest.fn();
	wrapper = shallow(
		<Header
			startLogout={startLogout}
		/>
	);
});

// Should call startLogout on button click

test('should call startLogout on button click', () => {
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});
