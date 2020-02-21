import { History as TiptapHistory } from 'tiptap-extensions';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';

export default class History extends TiptapHistory {
  menuBtnView ({ commands }) {
    return [
      {
        component: CommandButton,
        componentProps: {
          command: commands.undo,
          icon: 'undo',
          tooltip: t('editor.extensions.History.tooltip.undo'),
        },
      },
      {
        component: CommandButton,
        componentProps: {
          command: commands.redo,
          icon: 'redo',
          tooltip: t('editor.extensions.History.tooltip.redo'),
        },
      },
    ];
  }
}