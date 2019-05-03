import React, { Component } from 'react';
import Post from '../Components/Post';
import Header from '../Components/Header';

const url_picture = 'https://api.adorable.io/avatars/84/';

export default class App extends Component {
  state = {
    posts: [
      {
        _id: '5ccb628cbd514b7b5b2e7145',
        name: 'Cherry Mccall',
        content:
          'Adipisicing nisi id tempor aliqua deserunt cillum nostrud in veniam velit. Amet anim non consectetur deserunt laborum anim minim labore ut. Culpa id non qui velit cupidatat laboris elit incididunt ipsum culpa sunt sunt. Excepteur cillum Lorem dolore pariatur velit enim nisi exercitation in. Pariatur Lorem exercitation mollit dolore aliquip velit Lorem proident ea. Reprehenderit quis deserunt ea pariatur.',
      },
      {
        _id: '5ccb628c0ed14fcc22a9e767',
        name: 'Whiteh Gibbs',
        content:
          'Aute elit commodo adipisicing culpa ipsum. Adipisicing non aliquip nostrud irure esse velit irure. Nisi nostrud duis pariatur laboris ullamco cillum non. Consectetur ullamco dolore qui in eiusmod dolor aliquip sint exercitation. Non ad mollit deserunt quis duis amet incididunt. Voluptate ut labore ullamco nisi officia nulla id sint amet dolore culpa in eu. Aliquip exercitation ut ad eiusmod pariatur nostrud nostrud commodo Lorem proident.',
      },
      {
        _id: '5ccb628c2da1d7d76d56c024',
        name: 'Traci brien',
        content:
          'Culpa exercitation non esse excepteur ut do consequat dolor nostrud dolore. Esse quis minim et nostrud aliqua labore consectetur amet Lorem. Laborum dolor id nulla minim et minim ex. Occaecat cupidatat aliqua excepteur deserunt laboris reprehenderit eiusmod consectetur do eiusmod fugiat aliquip. Consequat ut tempor sit aliquip sint velit anim. Et sit elit exercitation excepteur enim labore. Exercitation quis occaecat cillum tempor in irure sunt sunt dolore.',
      },
      {
        _id: '5ccb628cd36307624ca1e2f5',
        name: 'Estell Moore',
        content:
          'Occaecat eiusmod commodo est anim cupidatat nulla. Ut tempor ut eiusmod duis voluptate esse esse ea adipisicing est velit. Qui et eu adipisicing quis consectetur nisi. Amet incididunt pariatur ullamco non officia magna ipsum amet pariatur. Aliqua excepteur qui est consequat ullamco aliquip officia esse pariatur pariatur eiusmod.',
      },
      {
        _id: '5ccb628c7aab392eb73bb8ef',
        name: 'Susann Parks',
        content:
          'Et ut culpa ullamco officia dolor quis officia velit nulla pariatur. Consequat eiusmod cillum sit aute sunt cillum. Ipsum consequat tempor minim reprehenderit dolor commodo sunt adipisicing ea fugiat magna. Fugiat culpa duis laborum veniam sunt officia dolore culpa do elit in. Do exercitation ipsum culpa exercitation. Reprehenderit nulla reprehenderit adipisicing mollit cillum aute.',
      },
      {
        _id: '5ccb628c744dcfed3b3be590',
        name: 'Marks orter',
        content:
          'Voluptate ipsum ullamco eiusmod do voluptate tempor amet fugiat minim elit aliquip officia. Labore fugiat ea ea officia ut voluptate nisi qui pariatur. Nulla Lorem enim sunt eiusmod. Esse et eiusmod quis quis nostrud pariatur duis duis anim nisi. Do exercitation id nulla est.',
      },
      {
        _id: '5ccb628c63bf0b54cb3ca6de',
        name: 'Chavez Hernandez',
        content:
          'Nisi esse adipisicing velit fugiat duis minim veniam. Sit duis ex adipisicing voluptate cillum id adipisicing excepteur minim. Quis excepteur consectetur minim tempor labore ullamco nisi eu minim. Sit et incididunt pariatur proident irure. Sit nostrud dolore officia deserunt consequat exercitation. Eiusmod Lorem nostrud occaecat sint enim laboris sunt duis ipsum ea aliqua enim pariatur elit.',
      },
      {
        _id: '5ccb628c231d31188de2df27',
        name: 'Hebert Cochran',
        content:
          'Labore est aute id velit nostrud deserunt exercitation mollit veniam ex nostrud cillum. Amet eiusmod pariatur tempor deserunt amet ut laborum quis dolore aliqua consequat sunt. Aliquip ea incididunt in exercitation ut. Qui incididunt aute nulla nostrud ipsum tempor excepteur quis commodo aliquip consectetur sit qui. Pariatur laborum pariatur ex minim eu laboris commodo qui veniam excepteur officia qui eu. Lorem dolor consequat qui esse laboris do eu nisi quis consectetur sit ad.',
      },
      {
        _id: '5ccb628c0881d3d0164df2fa',
        name: 'Leon tthews',
        content:
          'Laboris laboris do cupidatat cillum enim. Officia sunt nostrud id culpa nisi reprehenderit in dolor culpa. Cupidatat proident aute non elit nisi ea. Anim ipsum aliqua id ullamco in sunt eiusmod reprehenderit non ad sit. Labore ex elit aliquip tempor sunt adipisicing anim. Adipisicing proident in laboris commodo sunt aliqua occaecat magna duis eu non.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="posts">
          {posts.map(post => (
            <Post key={post._id} avatar={url_picture} name={post.name} content={post.content} />
          ))}
        </div>
      </div>
    );
  }
}
