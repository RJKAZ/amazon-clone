# amazon-clone
making a clone of amazon

Finished Section 7 - will being Section 8 next about adding User Authentification 

Left off on Section 8 - Part 22 - Implement Sign-in Action

Finished Section 8 - Starting Section 9 - however the product pages are not working, some API error. 

lol...oh my coding god...lol....so at this point in the project, the code was working except the products. Kept getting error messages, in the console, it said a 500s server error. 

After the 1st hour of trouble shooting I got one error "Cast to Objectid failed for value "1" at path "_id" for model product. I could not figure this problem out. I literally must have spend 4 hours over the past 3 days trying to figure this out. 

and on my god...it was a simple damn typo. One letter off lol

In the Product Router file in backend, I wrote res.send(products) when it needed to be res.send(product)

4 hours of troubleshooting and pulling my hair out over a damn " s " . 

lol...."It is the way" I suppose. 