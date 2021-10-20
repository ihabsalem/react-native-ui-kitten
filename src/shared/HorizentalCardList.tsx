import React from 'react';
import {ListRenderItemInfo, StyleSheet} from 'react-native';
import {OverlayCard} from './OverlayCard';

export const HorizentalCardList = (
  card: ListRenderItemInfo<any>,
): React.ReactElement => (
  <OverlayCard style={styles.horizontalItem} card={card.item || card} />
);

const styles = StyleSheet.create({
  horizontalItem: {
    width: 256,
    marginHorizontal: 8,
  },
});
