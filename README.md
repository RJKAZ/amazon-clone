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

left off on Section 9 - just finished Part 28, but there is an errpr in the PlaceOrderScreen.js at line 34, a syntax error, but I can't figure out whats wrong, will do so later after a rest. 


12/28/20 - ARGH...again scratching my head out. Got an error at the end of the place order function. 

res.status(...)send.send is not a function

2 hours today trying to figure this problem out and thus far no luck. 

12/29/20 update- Finally...after another hour of trying to find the bug...thinking it was somewhere in the frontend, it was really in the backend. had an extra .send towards the end of the orderROuter.js file.

No I can move on to the next part....finally. 

finished Part 30 - next to Part 31  Pay Order - also, figure out how to update my paypal developer account.

Finished Part 31 - Pay Order, but its not working. It's stuck on the infinite loop still. Double check all code from this lesson, and again, it might have to do witht he developer account issue with paypal and me not having updated it.

Starting Section 10: User Profiles and Orders

2 hours trouble shooting the loop problem...I've tested the source code example and it works, so the problem is def somewhere on my end, but so far cannot find it. 

another hour trying to touble shoot the loop problem and still no luck. I can however safely rule out the backend. I swaped my entire backend for the demo one and that didn't solve the problem. I need to attemp this with the front end.

lol...took about a week, but I finally found the cursed error.

In the OrderScreen.js file, at line 37......

if (!order || successPay || (order && order._id !== order.Id)) {

the problem was the end....it should have been   !== orderId)) {  - it was literally a damn period that messed my code up for about a week now. 

Life of a Coder I guess...lol

left off on Part 32  (Display Orders History) at the 10:15 mark

finished Part 32- With no errors LOL

finished Part 34 , and finished Section 10

Starting Section 11: Admin Prodcuts (54% done)

finished part 37: will start on Part 37 - Create Product -  next (still have to figure out how to actually set up the admin account)

Finished Part 37, but since I can't login to an Admin account, I can't really verify if any of this new code is working (beyond the app itself working fine)

I posted a question to the Udemy instructor on how to create new admin accounts, hopefully he'll respond before I finish this section. 

Finished Part 38, still no luck with getting the admin to work. :(
