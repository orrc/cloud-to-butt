walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");

	// German + Telekom
	v = v.replace(/\bDie (Telekom)?Cloud\b/g, "Mein Arsch");
	v = v.replace(/\bDer (Telekom)?Cloud\b/g, "Meinem Arsch");
	v = v.replace(/\bZur (Telekom)?Cloud\b/g, "Zu meinem Arsch");
	v = v.replace(/\bdie (Telekom)?Cloud\b/g, "mein Arsch");
	v = v.replace(/\bder (Telekom)?Cloud\b/g, "meinem Arsch");
	v = v.replace(/\bzur (Telekom)?Cloud\b/g, "zu meinem Arsch");
	v = v.replace(/Telekom ?Cloud/g, "TelekomArsch");
	v = v.replace(/Mail & Cloud/g, "Mail & Arsch");

	textNode.nodeValue = v;
}


