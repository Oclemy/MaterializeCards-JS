/*
- Global declarations
 */
var displaySection=document.getElementById("displaySectionID");
var listView=document.createElement('ul');
var galaxies=['Pinwheel','Cartwheel',"Ring Nebular","Virgo Stellar Stream","Canis Majos Overdensity","Sombrero","Own Nebular","Triangulum"];

/*
- UI class
 */
var UI= function () {
     this.createCard=function(id,name,description)
     {
         var cardView=document.createElement('div');
         cardView.className="card blue-grey darken-1";

         var contentView=document.createElement('div');
         contentView.className="card-content white-text";

         var span=document.createElement('span');
         span.className="card-title";
         contentView.appendChild(span);

         contentView.appendChild(document.createTextNode(description));
         span.innerText=name;
         cardView.appendChild(contentView);

         var cardActionsView=document.createElement('div');
         cardActionsView.className="card-action";

         //create action button 2
         var actionButton1=document.createElement('a');
         actionButton1.appendChild(document.createTextNode("Show"));
         actionButton1.setAttribute("id","showID"+id.toString());

         //onclick event for actionbutton 1
         actionButton1.onclick=function()
         {
             alert(name);
         }

         //create second action button
         var actionButton2=document.createElement('a');
         actionButton2.appendChild(document.createTextNode("View"));
         actionButton2.setAttribute("id","viewID"+id.toString());

         //When button 2 is clicked
         actionButton2.onclick=function()
         {
             alert(description);
         }

         //Add action buttons to cardActionsview
         cardActionsView.appendChild(actionButton1);
         cardActionsView.appendChild(actionButton2);

         //Add cardActionsview with action buttons to cardview
         cardView.appendChild(cardActionsView);

         return cardView;
     }

    /*
    - Create ListView
    - Fill with data
    - Append to displaySection
     */
    this.createListView=function()
    {
        listView.className="list";

        for(var i=0;i<galaxies.length;i++)
        {
            var listViewItem=document.createElement('li');
            listViewItem.appendChild(this.createCard(i,galaxies[i],"This is the Description for "+galaxies[i]));
            listView.appendChild(listViewItem);

        }
        displaySection.appendChild(listView);
    }
}


var ui=new UI();
ui.createListView();


