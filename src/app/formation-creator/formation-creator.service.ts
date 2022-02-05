import { Injectable } from '@angular/core';
import { HeroTypeSelector } from './hero-selector/hero-selector.component';

@Injectable({
  providedIn: 'root'
})
export class FormationCreatorService {
  private urlHeroDecoder = [
    'gabriel', 'christian', 'adrian', 'lucas', 'sophia', 'camilla', 'harold', 'daniel', 'julian', 'anthony', 'vincent',
    'rodrick', 'evan', 'aisha', 'xavier', 'marcus', 'ryan', 'blake', 'raven', 'tristan', 'carlos', 'austin', 'miguel',
    'leonidas', 'randolph', 'jackson', 'ellie', 'luke', 'logan', 'mason', 'diego', 'brian'
  ];
  private heroInformation: { [key: string]: { type: HeroTypeSelector, name: string } } = {
    gabriel: { type: HeroTypeSelector.SUPPORT, name: 'gabriel' },
    christian: { type: HeroTypeSelector.SUPPORT, name: 'christian' },
    adrian: { type: HeroTypeSelector.SUPPORT, name: 'adrian' },
    lucas: { type: HeroTypeSelector.SUPPORT, name: 'lucas' },
    sophia: { type: HeroTypeSelector.SUPPORT, name: 'sophia' },
    camilla: { type: HeroTypeSelector.SUPPORT, name: 'camilla' },
    harold: { type: HeroTypeSelector.SUPPORT, name: 'harold' },
    daniel: { type: HeroTypeSelector.WARRIOR, name: 'daniel' },
    julian: { type: HeroTypeSelector.WARRIOR, name: 'julian' },
    anthony: { type: HeroTypeSelector.WARRIOR, name: 'anthony' },
    vincent: { type: HeroTypeSelector.WARRIOR, name: 'vincent' },
    rodrick: { type: HeroTypeSelector.WARRIOR, name: 'rodrick' },
    evan: { type: HeroTypeSelector.SUPPORT, name: 'evan' },
    aisha: { type: HeroTypeSelector.SUPPORT, name: 'aisha' },
    xavier: { type: HeroTypeSelector.SUPPORT, name: 'xavier' },
    marcus: { type: HeroTypeSelector.SUPPORT, name: 'marcus' },
    ryan: { type: HeroTypeSelector.WARRIOR, name: 'ryan' },
    blake: { type: HeroTypeSelector.WARRIOR, name: 'blake' },
    raven: { type: HeroTypeSelector.WARRIOR, name: 'raven' },
    tristan: { type: HeroTypeSelector.SUPPORT, name: 'tristan' },
    carlos: { type: HeroTypeSelector.SUPPORT, name: 'carlos' },
    austin: { type: HeroTypeSelector.SUPPORT, name: 'austin' },
    miguel: { type: HeroTypeSelector.WARRIOR, name: 'miguel' },
    leonidas: { type: HeroTypeSelector.WARRIOR, name: 'leonidas' },
    randolph: { type: HeroTypeSelector.WARRIOR, name: 'randolph' },
    jackson: { type: HeroTypeSelector.WARRIOR, name: 'jackson' },
    ellie: { type: HeroTypeSelector.SUPPORT, name: 'ellie' },
    luke: { type: HeroTypeSelector.SUPPORT, name: 'luke' },
    logan: { type: HeroTypeSelector.SUPPORT, name: 'logan' },
    mason: { type: HeroTypeSelector.SUPPORT, name: 'mason' },
    diego: { type: HeroTypeSelector.WARRIOR, name: 'diego' },
    brian: { type: HeroTypeSelector.SUPPORT, name: 'brian' },
  }
  constructor() { }

  public decodeString(queryString: string) {
    const parsedObject: { [key: string]: boolean } = {};
    const parsedWithType: any = {
      [HeroTypeSelector.WARRIOR]: [],
      [HeroTypeSelector.SUPPORT]: [],
      [HeroTypeSelector.ALL]: {}
    };
    const queryAsArray = queryString.split('');
    if (queryAsArray.length === this.urlHeroDecoder.length) {
      this.urlHeroDecoder.forEach((heroName: string, index: number) => {
        const parsedQueryValue = parseInt(queryAsArray[index])
        const parsedHeroObject: any = this.heroInformation[heroName]
        parsedHeroObject.selected = parsedQueryValue === 0 ? false : true
        parsedWithType[this.heroInformation[heroName].type].push(parsedHeroObject);
        parsedWithType[HeroTypeSelector.ALL][heroName] = parsedHeroObject;
      });
    } else {
      this.urlHeroDecoder.forEach((heroName: string) => {
        const parsedHeroObject: any = this.heroInformation[heroName]
        parsedHeroObject.selected = false
        parsedWithType[HeroTypeSelector.ALL][heroName] = parsedHeroObject;
      });
      console.warn('Error when parsing the given query string')
    }
    return parsedWithType;
  }
  public encodeObject(objectToEncode: { [key: string]: any }) {
    let stringResult = '';
    for (const hero in objectToEncode) {
      if (objectToEncode.hasOwnProperty(hero)) {
        stringResult += objectToEncode[hero].selected ? '1' : '0'
      }
    }
    return stringResult;
  }

  public getAllHeroNames(filterType?: HeroTypeSelector) {
    if (filterType) {
      return Object.keys(this.heroInformation).filter((heroName: string) => {
        return this.heroInformation[heroName].type === filterType;
      })
    } else {
      return this.urlHeroDecoder;
    }
  }
}
