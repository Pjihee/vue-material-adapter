import { MDCTabBarFoundation } from '@material/tab-bar/foundation';
import { MDCTabFoundation } from '@material/tab/foundation';
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watchEffect,
} from '@vue/composition-api';
import { emitCustomEvent } from '~/base/index.js';

const { strings } = MDCTabBarFoundation;

export default {
  name: 'mcw-tab-bar',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    fade: Boolean,
    stacked: Boolean,
    spanContent: Boolean,
    value: Number,
  },

  setup(props, { emit, listeners: $listeners }) {
    const scroller = ref(null);
    const root = ref(null);

    const tabList = ref([]);

    provide('mcwTabList', {
      fade: props.fade,
      stacked: props.stacked,
      spanContent: props.spanContent,
      tabList,
    });

    const listeners = computed(() => {
      return {
        ...$listeners,
        [MDCTabFoundation.strings.INTERACTED_EVENT]: evt =>
          foundation.handleTabInteraction(evt),
        keydown: evt => foundation.handleKeyDown(evt),
      };
    });

    let foundation;

    const getTabElements_ = () => {
      return [].slice.call(root.value.querySelectorAll(strings.TAB_SELECTOR));
    };

    const activateTab = index => foundation.activateTab(index);

    const adapter = {
      scrollTo: scrollX => scroller.value.scrollTo(scrollX),
      incrementScroll: scrollXIncrement =>
        scroller.value.incrementScroll(scrollXIncrement),
      getScrollPosition: () => scroller.value.getScrollPosition(),
      getScrollContentWidth: () => scroller.value.getScrollContentWidth(),
      getOffsetWidth: () => root.value.offsetWidth,
      isRTL: () =>
        window.getComputedStyle(root.value).getPropertyValue('direction') ===
        'rtl',
      setActiveTab: index => {
        foundation.activateTab(index);
      },
      activateTabAtIndex: (index, clientRect) => {
        tabList.value[index].activate(clientRect);
      },
      deactivateTabAtIndex: index => tabList.value[index]?.deactivate(),

      focusTabAtIndex: index => tabList.value[index].focus(),
      getTabIndicatorClientRectAtIndex: index =>
        tabList.value[index]?.computeIndicatorClientRect(),
      getTabDimensionsAtIndex: index =>
        tabList.value[index].computeDimensions(),
      getPreviousActiveTabIndex: () => {
        for (let i = 0; i < tabList.value.length; i++) {
          if (tabList.value[i].isActive()) {
            return i;
          }
        }
        return -1;
      },
      getFocusedTabIndex: () => {
        const tabElements = getTabElements_();
        const activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: id => {
        for (let i = 0; i < tabList.value.length; i++) {
          if (tabList.value[i].id === id) {
            return i;
          }
        }
        return -1;
      },
      getTabListLength: () => tabList.value.length,
      notifyTabActivated: index => {
        emitCustomEvent(
          root.value,
          strings.TAB_ACTIVATED_EVENT,
          { index },
          true,
        );

        emit('change', Number(index));
      },
    };

    onMounted(() => {
      foundation = foundation = new MDCTabBarFoundation(adapter);
      foundation.init();

      // ensure active tab
      props.value !== void 0;
      foundation.activateTab(Number(props.value) || 0);

      for (let i = 0; i < tabList.value.length; i++) {
        if (tabList.value[i].active) {
          foundation.scrollIntoView(i);
          break;
        }
      }

      watchEffect(() => {
        foundation.activateTab(Number(props.value));
      });
    });

    onBeforeUnmount(() => {
      foundation.destroy();
    });

    return { root, scroller, listeners, activateTab };
  },
};
