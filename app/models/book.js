import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('date'),
  library: DS.belongsTo('library', {inverse: 'books', async: true}),
  author: DS.belongsTo('author', {inverse: 'books', async: true}),

  randomize(author, library){
  	this.set('title', this._bookTitlte());
  	this.set('author', author);
  	this.set('releaseYear', this._randomYear());
  	this.set('libraray', library);

  	return this;	
  },

  _bookTitlte(){
  	return `${Faker.commerce.productName()} Cookbook`;
  },

  _randomYear(){ 
  	return new Date(this._getRandomArbitrary(1900, 2017).toPrecision(4));
  },

  _getRandomArbitrary(min, max){
  	return Math.random() * (max - min) + min;
  }

});
