import { Component,OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ImageGallayApi';
  // images!: any[];
  images: any[] = [];

  
  defaultImages:any[] = [
    {
        "id": 17550389,
        "width": 4640,
        "height": 6960,
        "url": "https://www.pexels.com/photo/the-scale-17550389/",
        "photographer": "Vasilis Karkalas",
        "photographer_url": "https://www.pexels.com/@vasilis-karkalas-155349971",
        "photographer_id": 155349971,
        "avg_color": "#915743",
        "src": {
            "original": "https://images.pexels.com/photos/17550389/pexels-photo-17550389.jpeg",
            "large2x": "https://images.pexels.com/photos/17550389/pexels-photo-17550389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17550389/pexels-photo-17550389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17550389/pexels-photo-17550389.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17550389/pexels-photo-17550389.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17550389/pexels-photo-17550389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17550389/pexels-photo-17550389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17550389/pexels-photo-17550389.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "The scale"
    },
    {
        "id": 17552526,
        "width": 4111,
        "height": 6167,
        "url": "https://www.pexels.com/photo/city-road-man-person-17552526/",
        "photographer": "Hatice Baran",
        "photographer_url": "https://www.pexels.com/@hatice-baran-153179658",
        "photographer_id": 153179658,
        "avg_color": "#9BA29A",
        "src": {
            "original": "https://images.pexels.com/photos/17552526/pexels-photo-17552526.jpeg",
            "large2x": "https://images.pexels.com/photos/17552526/pexels-photo-17552526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17552526/pexels-photo-17552526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17552526/pexels-photo-17552526.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17552526/pexels-photo-17552526.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17552526/pexels-photo-17552526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17552526/pexels-photo-17552526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17552526/pexels-photo-17552526.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
        "id": 17540359,
        "width": 3648,
        "height": 5472,
        "url": "https://www.pexels.com/photo/man-love-people-woman-17540359/",
        "photographer": "Elina Volkova",
        "photographer_url": "https://www.pexels.com/@miami302",
        "photographer_id": 52023188,
        "avg_color": "#8F8882",
        "src": {
            "original": "https://images.pexels.com/photos/17540359/pexels-photo-17540359.jpeg",
            "large2x": "https://images.pexels.com/photos/17540359/pexels-photo-17540359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17540359/pexels-photo-17540359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17540359/pexels-photo-17540359.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17540359/pexels-photo-17540359.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17540359/pexels-photo-17540359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17540359/pexels-photo-17540359.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17540359/pexels-photo-17540359.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
        "id": 17454328,
        "width": 3040,
        "height": 4560,
        "url": "https://www.pexels.com/photo/rows-of-striped-sunshades-on-a-beach-and-horizon-over-blue-sea-17454328/",
        "photographer": "Jack Granger",
        "photographer_url": "https://www.pexels.com/@jack-granger-191857229",
        "photographer_id": 191857229,
        "avg_color": "#798D96",
        "src": {
            "original": "https://images.pexels.com/photos/17454328/pexels-photo-17454328.jpeg",
            "large2x": "https://images.pexels.com/photos/17454328/pexels-photo-17454328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17454328/pexels-photo-17454328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17454328/pexels-photo-17454328.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17454328/pexels-photo-17454328.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17454328/pexels-photo-17454328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17454328/pexels-photo-17454328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17454328/pexels-photo-17454328.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
        "id": 17452249,
        "width": 3928,
        "height": 5892,
        "url": "https://www.pexels.com/photo/neon-of-a-bowling-center-17452249/",
        "photographer": "Noel  Blck",
        "photographer_url": "https://www.pexels.com/@noelace",
        "photographer_id": 2435415,
        "avg_color": "#1D1719",
        "src": {
            "original": "https://images.pexels.com/photos/17452249/pexels-photo-17452249.jpeg",
            "large2x": "https://images.pexels.com/photos/17452249/pexels-photo-17452249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17452249/pexels-photo-17452249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17452249/pexels-photo-17452249.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17452249/pexels-photo-17452249.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17452249/pexels-photo-17452249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17452249/pexels-photo-17452249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17452249/pexels-photo-17452249.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
        "id": 17449645,
        "width": 4128,
        "height": 5504,
        "url": "https://www.pexels.com/photo/black-and-white-photo-of-a-man-sitting-in-a-chair-17449645/",
        "photographer": "João Pedro",
        "photographer_url": "https://www.pexels.com/@joao-pedro-454808227",
        "photographer_id": 454808227,
        "avg_color": "#5A5A5A",
        "src": {
            "original": "https://images.pexels.com/photos/17449645/pexels-photo-17449645.jpeg",
            "large2x": "https://images.pexels.com/photos/17449645/pexels-photo-17449645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17449645/pexels-photo-17449645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17449645/pexels-photo-17449645.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17449645/pexels-photo-17449645.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17449645/pexels-photo-17449645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17449645/pexels-photo-17449645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17449645/pexels-photo-17449645.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of bar cafe, chair, disc jockey"
    },
    {
        "id": 17448888,
        "width": 2642,
        "height": 3930,
        "url": "https://www.pexels.com/photo/side-view-of-a-woman-wearing-a-summer-hat-and-a-coat-17448888/",
        "photographer": "stayhereforu",
        "photographer_url": "https://www.pexels.com/@stayhereforu-216201233",
        "photographer_id": 216201233,
        "avg_color": "#ACADA5",
        "src": {
            "original": "https://images.pexels.com/photos/17448888/pexels-photo-17448888.jpeg",
            "large2x": "https://images.pexels.com/photos/17448888/pexels-photo-17448888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17448888/pexels-photo-17448888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17448888/pexels-photo-17448888.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17448888/pexels-photo-17448888.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17448888/pexels-photo-17448888.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17448888/pexels-photo-17448888.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17448888/pexels-photo-17448888.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
        "id": 17447002,
        "width": 3946,
        "height": 5919,
        "url": "https://www.pexels.com/photo/bowl-of-fruits-on-the-table-17447002/",
        "photographer": "Annaëlle Quionquion",
        "photographer_url": "https://www.pexels.com/@annaelle-quionquion-2652658",
        "photographer_id": 2652658,
        "avg_color": "#7F6650",
        "src": {
            "original": "https://images.pexels.com/photos/17447002/pexels-photo-17447002.jpeg",
            "large2x": "https://images.pexels.com/photos/17447002/pexels-photo-17447002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17447002/pexels-photo-17447002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17447002/pexels-photo-17447002.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17447002/pexels-photo-17447002.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17447002/pexels-photo-17447002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17447002/pexels-photo-17447002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17447002/pexels-photo-17447002.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
        "id": 17445490,
        "width": 4000,
        "height": 6000,
        "url": "https://www.pexels.com/photo/studio-shoot-of-a-ballerina-in-a-white-dress-17445490/",
        "photographer": "Chrys Stam",
        "photographer_url": "https://www.pexels.com/@chrys-stam-166597765",
        "photographer_id": 166597765,
        "avg_color": "#3F322C",
        "src": {
            "original": "https://images.pexels.com/photos/17445490/pexels-photo-17445490.jpeg",
            "large2x": "https://images.pexels.com/photos/17445490/pexels-photo-17445490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17445490/pexels-photo-17445490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17445490/pexels-photo-17445490.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17445490/pexels-photo-17445490.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17445490/pexels-photo-17445490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17445490/pexels-photo-17445490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17445490/pexels-photo-17445490.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": ""
    },
    {
        "id": 17441013,
        "width": 6000,
        "height": 4000,
        "url": "https://www.pexels.com/photo/buddhist-monk-walking-by-the-temple-17441013/",
        "photographer": "Ahmet Çığşar",
        "photographer_url": "https://www.pexels.com/@ahmetcigsar",
        "photographer_id": 624958792,
        "avg_color": "#A79E97",
        "src": {
            "original": "https://images.pexels.com/photos/17441013/pexels-photo-17441013.jpeg",
            "large2x": "https://images.pexels.com/photos/17441013/pexels-photo-17441013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17441013/pexels-photo-17441013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17441013/pexels-photo-17441013.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17441013/pexels-photo-17441013.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17441013/pexels-photo-17441013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17441013/pexels-photo-17441013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17441013/pexels-photo-17441013.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Buddhist monk walking around the buddhist temple"
    },
    {
        "id": 17539754,
        "width": 6000,
        "height": 4000,
        "url": "https://www.pexels.com/photo/sunrise-surf-17539754/",
        "photographer": "Indiana Barriopedro",
        "photographer_url": "https://www.pexels.com/@indiana-barriopedro-639081391",
        "photographer_id": 639081391,
        "avg_color": "#A0958F",
        "src": {
            "original": "https://images.pexels.com/photos/17539754/pexels-photo-17539754.jpeg",
            "large2x": "https://images.pexels.com/photos/17539754/pexels-photo-17539754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17539754/pexels-photo-17539754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17539754/pexels-photo-17539754.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17539754/pexels-photo-17539754.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17539754/pexels-photo-17539754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17539754/pexels-photo-17539754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17539754/pexels-photo-17539754.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Sunrise surf"
    },
    {
        "id": 17428792,
        "width": 3024,
        "height": 4032,
        "url": "https://www.pexels.com/photo/headlight-of-vintage-car-17428792/",
        "photographer": "Anna Danilina",
        "photographer_url": "https://www.pexels.com/@anna-danilina-241843489",
        "photographer_id": 241843489,
        "avg_color": "#917B52",
        "src": {
            "original": "https://images.pexels.com/photos/17428792/pexels-photo-17428792.jpeg",
            "large2x": "https://images.pexels.com/photos/17428792/pexels-photo-17428792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17428792/pexels-photo-17428792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17428792/pexels-photo-17428792.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17428792/pexels-photo-17428792.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17428792/pexels-photo-17428792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17428792/pexels-photo-17428792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17428792/pexels-photo-17428792.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Фара"
    },
    {
        "id": 17427980,
        "width": 4016,
        "height": 5355,
        "url": "https://www.pexels.com/photo/close-up-of-woodchuck-17427980/",
        "photographer": "Gianluca Grisenti",
        "photographer_url": "https://www.pexels.com/@grisentig",
        "photographer_id": 2638779,
        "avg_color": "#93998B",
        "src": {
            "original": "https://images.pexels.com/photos/17427980/pexels-photo-17427980.jpeg",
            "large2x": "https://images.pexels.com/photos/17427980/pexels-photo-17427980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17427980/pexels-photo-17427980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17427980/pexels-photo-17427980.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17427980/pexels-photo-17427980.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17427980/pexels-photo-17427980.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17427980/pexels-photo-17427980.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17427980/pexels-photo-17427980.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Hallo guys!"
    },
    {
        "id": 17510041,
        "width": 3919,
        "height": 5878,
        "url": "https://www.pexels.com/photo/sea-nature-people-relaxation-17510041/",
        "photographer": "Kabiur Rahman  Riyad",
        "photographer_url": "https://www.pexels.com/@riiyad",
        "photographer_id": 56676564,
        "avg_color": "#A5C6D7",
        "src": {
            "original": "https://images.pexels.com/photos/17510041/pexels-photo-17510041.jpeg",
            "large2x": "https://images.pexels.com/photos/17510041/pexels-photo-17510041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17510041/pexels-photo-17510041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17510041/pexels-photo-17510041.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17510041/pexels-photo-17510041.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17510041/pexels-photo-17510041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17510041/pexels-photo-17510041.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17510041/pexels-photo-17510041.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Free stock photo of adult, adventure, bangladesh"
    },
    {
        "id": 17502210,
        "width": 3276,
        "height": 4096,
        "url": "https://www.pexels.com/photo/processed-with-vsco-with-e3-preset-17502210/",
        "photographer": "enisahalidi",
        "photographer_url": "https://www.pexels.com/@enisahalidi-542804307",
        "photographer_id": 542804307,
        "avg_color": "#93A8AB",
        "src": {
            "original": "https://images.pexels.com/photos/17502210/pexels-photo-17502210.jpeg",
            "large2x": "https://images.pexels.com/photos/17502210/pexels-photo-17502210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/17502210/pexels-photo-17502210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/17502210/pexels-photo-17502210.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/17502210/pexels-photo-17502210.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/17502210/pexels-photo-17502210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/17502210/pexels-photo-17502210.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/17502210/pexels-photo-17502210.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Processed with VSCO with e3 preset"
    }
]
isApiDataLoaded = false;

  receiveData(data: any): void {
    this.images = data
    // Do any additional processing with the received data
  }
  // page: number = 1;
  constructor(private imagesApi:ApiService){

  }
  ngOnInit(): void {
    //  Specify the current page number
    this.imagesApi.getImage(this.imagesApi.page).subscribe(response => {
      console.log(response.photos)
      this.imagesApi.imagesArray = response.photos;
      this.images =  this.imagesApi.imagesArray
      this.isApiDataLoaded = true;
      console.log(this.imagesApi.imagesArray,this.images)
    });
  }
  
  downloadImg(src: any): void {
    this.imagesApi.downloadImage(src);
  }

  loadMoreImages(): void {
    this.imagesApi.page++;
    this.imagesApi.loadMoreImages(this.imagesApi.page)
      .subscribe({
        next: (data: any) => {
          // Handle the API response here
          console.log(data);
          // this.images = [...this.images,data.photos]
          this.images = [...this.imagesApi.imagesArray, ...data.photos]; // Concatenate the arrays using spread operator

          // this.images.push(data.photos);
        },
        error: (error: any) => {
          // Handle any errors
          console.error(error);
        }
      });
  }
  
  
  }
  
  

  


