//COMMON ITEM PROPERTIES

const CONDITION = ["FACTORY SECOND", "REFURBISHED", "USED", "BRAND NEW"];

const SpeakerBrands = ["JBL", "Mackie", "M-Audio", "Peavey", "Behringer", "American Audio", "Electro-Voice", "Gemini", "Samson", "Proel", "KRK", "KRK"];
const GuitarBrands = ["Gibson", "Austin", "Schecter", "Cordoba", "Sigma", "Martin", "Fender", "Alvarez"];
const KeyboardBrands = ["Casio", "Roland", "Yamamha", "AKAI", "M-Audio"];
const CableBrands = ["Rapco", "Hosa"]

function Item(Manufacturer=null,Model=null,SerialNumber=null, Condition=null, Price=0, Quantity=0, Description="",Pictures=null,CSS_ID=null)
{
	if(Array.isArray(Manufacturer)){
		this.Manufacturer = Manufacturer[0];	
		this.Model = Manufacturer[1];
		this.SerialNumber = Manufacturer[2];
		this.Condition = Manufacturer[3];
		this.Price = Manufacturer[4];
		this.Description = Manufacturer[5];
	}
	
	
	this.Manufacturer = Manufacturer;
	this.Model = Model;
	this.Condition = Condition;
	this.Price = Price;
	this.Description = Description;
	this.Pictures = Pictures;	
	this.Quantity = Quantity;
	this.CSS_ID = CSS_ID;
	
	
	
	this.ToHTML = function()
	{
		
		
		var ItemHTML = document.createElement("div");
		var ItemHeader = document.createElement("h3");
		var ItemPicture = document.createElement("img");
		var ItemPrice = document.createElement("p");
		var HeaderText = document.createTextNode(this.Manufacturer.toString()+ " " + this.Model.toString());
		var PriceText = document.createTextNode(this.Price.toString());
		
		
		//Set CSS Styles
		ItemPicture.setAttribute("class","ItemPic");
		ItemPrice.setAttribute("class","ItemPrice");
		ItemHeader.setAttribute("class","ItemHeader");
		ItemHTML.setAttribute("class","Item");
		
		//Add Text Nodes
		ItemPrice.appendChild(PriceText);	
		ItemHeader.appendChild(HeaderText);	
		
		
		//Add child HTML elements to root item div element
		ItemHTML.appendChild(ItemHeader);
		ItemHTML.appendChild(ItemPicture);
		ItemHTML.appendChild(ItemPrice)
		return ItemHTML;
	}
	
	this.CreatePage = function()
	{
		
		
		
	}
}


//CREATE ITEM FUNCTIONS
function Speaker(Model, Manufacturer, Condition, Price, Quantity, Description, Pictures,CSS_ID)
{
	this.prototype = Item;
	this.ItemType = "Speaker";
	Item.call(this,Model,Manufacturer,Condition, Price, Quantity, Description,Pictures,CSS_ID);	
}

function Guitar(Model, Manufacturer, Condition, Price, Quantity, Description, Pictures,CSS_ID)
{
	this.prototype = Item;
	this.ItemType = "Guitar";
	Item.call(this,Model,Manufacturer,Condition, Price, Quantity, Description,Pictures,CSS_ID);
}
function Keyboard(Model, Manufacturer, Condition, Price, Quantity, Description, Pictures,CSS_ID)
{
	this.prototype = Item;
	this.ItemType = "Keyboard";
	Item.call(this,Model,Manufacturer,Condition, Price, Quantity, Description,Pictures,CSS_ID);	
}
function Percussion(Model, Manufacturer, Condition, Price, Quantity, Description, Pictures)
{
	this.prototype = Item;
	this.ItemType = "Percussion";	
	Item.call(this,Model,Manufacturer,Condition, Price, Quantity, Description,Pictures,CSS_ID);
	
}
function Microphone(Model, Manufacturer, Condition, Price, Quantity, Description, Pictures,CSS_ID)
{
	this.prototype = Item;
	this.ItemType = "Speaker";
	Item.call(this,Model,Manufacturer,Condition, Price, Quantity, Description,Pictures,CSS_ID);;
}
function Amplifier(Model, Manufacturer, Condition, Price, Quantity, Description, Pictures,CSS_ID)
{
	this.prototype = Item;
	this.ItemType = "Amplifier";
	Item.call(this,Model,Manufacturer,Condition, Price, Quantity, Description,Pictures,CSS_ID);
}


var ItemXmlHTTP = new XMLHttpRequest();

ItemXmlHTTP.onreadystatechange = function()
{
	if(this.readyState == 4 && this.status === 200){
		console.log(this.responseXML);
		
		XmlItems = this.responseXML.getElementsByTagName("Item");
	
		var ItemArray = new Array();

		console.log(XmlItems);
		
		for(var x=0;x < XmlItems.length; x++){
		
			ItemInfo = [];
			var AddedItem = new Item();	
			
			AddedItem.Manufacturer = XmlItems[x].children[0].textContent;
			AddedItem.Model = XmlItems[x].children[1].textContent;
			AddedItem.Condition = XmlItems[x].children[3].textContent;		
			AddedItem.Price = XmlItems[x].children[4].textContent;
			AddedItem.Description = XmlItems[x].children[5].textContent;
			ItemArray.push(AddedItem);
			
		}

		for(var x = 0; x < ItemArray.length; x++){
			console.log(ItemArray[x].ToHTML());
		}
	}
};
var XmlItems;
ItemXmlHTTP.open("GET", "guitars.xml",true);
ItemXmlHTTP.send();

