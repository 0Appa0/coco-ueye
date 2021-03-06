import Vue from 'vue';
import FullCalendar from '@/components/full-calendar';
import { storiesOf } from '@storybook/vue';
import '@/styles/index.scss';

storiesOf('Calendar', module).add('Full Calendar', () => ({
    render: h => <FullCalendar />
}));
