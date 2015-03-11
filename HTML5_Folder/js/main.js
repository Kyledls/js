function showMood(){
    name = document.getElementById('name').value;
    name = document.getElementById('mood').value;
    
    moodString = name+" is "+mood+" today ";
    
    holder = document.getElementById('holder').value;
    
    holder.innerHTML = moodString;
}
