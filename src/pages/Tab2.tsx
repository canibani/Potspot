import React from 'react';
import {
    IonCol,
    IonContent,
    IonFab,
    IonFabButton,
    IonGrid,
    IonHeader,
    IonIcon, IonImg,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab2.css';
import {camera} from "ionicons/icons";
import {usePhotoGallery} from "../hooks/usePhotoGallery";

const Tab2: React.FC = () => {
    const { photos, takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add spot</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonContent className="ion-padding">
              Add a picture of a spot<br></br>
              <br></br>
              <IonGrid>
                  <IonRow>
                      {photos.map((photo, index) => (
                          <IonCol size="6" key={index}>
                              <IonImg src={photo.base64 ?? photo.webviewPath} />
                          </IonCol>
                      ))}
                  </IonRow>
              </IonGrid>
          </IonContent>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton onClick={() => takePhoto()}>
                  <IonIcon icon={camera}></IonIcon>
              </IonFabButton>
          </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
