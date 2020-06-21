import React from 'react';
import {IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {camera} from "ionicons/icons";
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*<ExploreContainer name="Tab 1 page" />*/}
          <IonContent className="ion-padding">
              Welcome to PotSpot, for Stoners, by Stoners.<br></br>
              <br></br>
              Find likeminded stoners to smoke with. Extend your social network.
              <p>
                  If you get lost, the{' '}
                  <a
                      target="_blank"
                      rel="noopener"
                      href="https://ionicframework.com/docs/"
                  >
                      docs
                  </a>{' '}
                  will be your guide.
              </p>
          </IonContent>
      </IonContent>
    </IonPage>
  );
};



export default Tab1;

