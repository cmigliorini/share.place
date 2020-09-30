import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Places } from './places';
import { PageContainer } from '../components';
import { Place } from './place';
import { Folder } from './folder';
import { Header } from '../components';
/*
mutation login {
  login(email:"christophe@21-5.fr", password:"PASSWORD"){
    accessToken
    lastConnection
  }
}


query place {
  place(id:4166) {
    name
    folders {
      id
    }
  }
}

query folders {
  folder(id:16705) {
    topics {
      id
    }
  }
}

query topics {
  topic(id:55808) {
    messages {
      id
      type
      
    }
  }
}*/
export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Header />
        <Router primary={false} component={Fragment}>
          <Places path="/" />
          <Place path="place/:placeId" />
          <Folder path="place/:placeId/folder/:folderId" />
          {/* <Topic path="place/:placeId/folder/:folderId" />
          <Message path="place/:placeId/folder/:folderId/message/:messageId" /> */}
        </Router>
      </PageContainer>
    </Fragment>
  );
}
