import React, { Component } from 'react';
import ReactGA from 'react-ga'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';


export default () => Composed => 
  class extends Component {
    static getInitialProps(ctx){
      return loadGetInitialProps(Composed, ctx)
    }

    componentDidMount(){
      console.log(`${window.location.pathname}`);
      
      ReactGA.initialize('UA-148480475-1');
      ReactGA.pageview(window.location.pathname);
    }
  
  render(){
    return <Composed {...this.props} />
  }
}