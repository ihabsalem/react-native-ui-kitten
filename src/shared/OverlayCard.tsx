import {Button, Card, CardElement, Text} from '@ui-kitten/components';
import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {ImageOverlay} from './image-overlay.component';

export const OverlayCard = (props: any): CardElement => {
  const {style, card, ...cardProps} = props;

  return (
    <Card {...cardProps} style={[styles.container, style]}>
      <ImageOverlay
        style={styles?.image}
        source={require('./assets/image-training-5.jpg')}>
        <Text style={styles.level} category="s1" status="control">
          15%
        </Text>
        <Text style={styles.title} category="h2" status="control">
          {card.name}
        </Text>
        <Button style={styles.durationButton} size="tiny">
          15 JOD
        </Button>
      </ImageOverlay>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  level: {
    zIndex: 1,
    borderRadius: 16,
    width: 60,
    backgroundColor: '#edf0f9',
    color: '#000',
    textAlign: 'center',
  },
  title: {
    zIndex: 1,
  },
  durationButton: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    borderRadius: 16,
    paddingHorizontal: 0,
  },
});
