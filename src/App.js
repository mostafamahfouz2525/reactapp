import React, { Component } from 'react';
import {Container} from 'reactstrap';
import {BrowserRouter} from 'react-router-dom';


import NavBarBootstrap from './components/NavBarBootstrap/NavBarBootstrap';

// components
import Footer from './components/Footer';


// pages 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import ContactPage from './pages/ContactPage';
import { Route } from 'react-router';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      'title' : 'New React Project',
      headerLinks:[
        {'title':'Home',path:'/'},
        {'title':'About',path:'/about'},
        {'title':'Contact',path:'/contact'},
      ],
      'home':{
        'title':'Home Page',
        'supTitle':'Sup Title',
        'text':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus expedita quae, culpa consectetur sunt error nobis. A saepe ipsum ab, maxime nam voluptas excepturi ex doloremque consequatur officia cupiditate laborum velit. Hic inventore culpa error autem quos amet in vel, ratione quo nisi est ut praesentium modi, ipsa quidem',
      },
      'about':{
        'title':'About Us',
        'supTitle':'About Us Sup Title',
        'text':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus expedita quae, culpa consectetur sunt error nobis. A saepe ipsum ab, maxime nam voluptas excepturi ex doloremque consequatur officia cupiditate laborum velit. Hic inventore culpa error autem quos amet in vel, ratione quo nisi est ut praesentium modi, ipsa quidem',
      },
      'users':{
        'title':'Users ',
        'supTitle':'Users  Sup Title',
        'text':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus expedita quae, culpa consectetur sunt error nobis. A saepe ipsum ab, maxime nam voluptas excepturi ex doloremque consequatur officia cupiditate laborum velit. Hic inventore culpa error autem quos amet in vel, ratione quo nisi est ut praesentium modi, ipsa quidem',
      },
      'contact':{
        'title':'Contact Us ',
        'supTitle':'Contact Us Sup Title',
        'text':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque doloribus expedita quae, culpa consectetur sunt error nobis. A saepe ipsum ab, maxime nam voluptas excepturi ex doloremque consequatur officia cupiditate laborum velit. Hic inventore culpa error autem quos amet in vel, ratione quo nisi est ut praesentium modi, ipsa quidem',
      }
    }
  }

  render()
  {
    return (
      <div className="">
        
          <Container fluid={true}>
            <BrowserRouter>
              <NavBarBootstrap />
              <Route path="/" exact  render={ () => <HomePage  title={this.state.home.title} 
              supTitle={this.state.home.supTitle} 
              text={this.state.home.text}  />  }/>

              <Route path="/about" exact  render={ () => <AboutPage  title={this.state.about.title} 
              supTitle={this.state.about.supTitle} 
              text={this.state.about.text}  />  }/>

              <Route path="/users" exact  render={ () => <UsersPage  title={this.state.users.title} 
              supTitle={this.state.users.supTitle} 
              text={this.state.users.text}  />  }/>

              <Route path="/contact" exact  render={ () => <ContactPage  title={this.state.contact.title} 
              supTitle={this.state.contact.supTitle} 
              text={this.state.contact.text}  />  }/>
            </BrowserRouter>
          </Container>
          <Footer />
       
        
      </div>
    );
  }
  
}

export default App;
