import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '~/assets/images/icons/heart-outline.png';
import unfavoriteIcon from '~/assets/images/icons/unfavorite.png';
import whatsappIcon from '~/assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/37725197?s=460&u=446439436524c37f66e41f35b607dbb70358d5e4&v=4',
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Vinícius Fraga Modesto</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Community Experience | @Rocketseat
        {'\n'}
        {'\n'}A expressão Lorem ipsum em design gráfico e editoração é um texto.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
