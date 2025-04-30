Web design Restaurant POs for demo
#Note: This project used by HTML, CSS, JAVASCRIPT only no plugin framework or library.
I. Custom web
    1. Font Noto Sans
        + Import link
            - Link
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Bokor&family=Bungee&family=Dangrek&family=Fugaz+One&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Lilita+One&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Permanent+Marker&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Russo+One&family=Spicy+Rice&display=swap');
                </style>
        + Font family 
            .noto-sans-<uniquifier> {
                font-family: "Noto Sans", sans-serif;
                font-optical-sizing: auto;
                font-weight: <weight>;
                font-style: normal;
                font-variation-settings: "wdth" 100;
            }
    2. Border Radius
        - Border Radius 1 : 6px;
        - Border Radius 2 : 8px;
        - Border Radius 3 : 12px;
        - Border Radius 4 : 50%;
    3. Padding 
        - Padding 1 : 8px
        - Padding 2 : 12px
        - Padding 3 : 18px
        - Padding 4 : 24px
    4. Margin 
        - Margin 1 : 8px
        - Margin 2 : 12px
        - Margin 3 : 18px
        - Margin 4 : 24px
    5. Font size
        + fs-8  : font-size: 8px;
        + fs-12 : font-size: 12px;
        + fs-14 : font-size: 14px;
        + fs-16 : font-size: 16px;
        + fs-18 : font-size: 18px;
        + fs-20 : font-size: 20px;
        + fs-22 : font-size: 22px;
        + fs-24 : font-size: 24px;
        + fs-28 : font-size: 28px;
        + fs-32 : font-size: 32px;
        + fs-36 : font-size: 36px;
        + fs-48 : font-size: 48px;
        + fs-56 : font-size: 56px;
    6. Icon and svg 
        + icon #1: home
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>
          )
        + icon #2: POs
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
                <path d="M8 14l0 .01"></path>
                <path d="M12 14l0 .01"></path>
                <path d="M16 14l0 .01"></path>
                <path d="M8 17l0 .01"></path>
                <path d="M12 17l0 .01"></path>
                <path d="M16 17l0 .01"></path>
            </svg>
          )
        + icon #3: Order
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
              <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
              <path d="M8 14l0 .01"></path>
              <path d="M12 14l0 .01"></path>
              <path d="M16 14l0 .01"></path>
              <path d="M8 17l0 .01"></path>
              <path d="M12 17l0 .01"></path>
              <path d="M16 17l0 .01"></path>
            </svg>
          )
        + icon #4: Setting
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
            </svg>
          )
        + icon #5: Menu
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"></path>
            </svg>
          )
        + icon #6: Tables
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18"></path>
            </svg>
          )
        + icon #7: Reservations
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                <path d="M16 3v4"></path>
                <path d="M8 3v4"></path>
                <path d="M4 11h16"></path>
                <path d="M8 14v4"></path>
                <path d="M12 14v4"></path>
                <path d="M16 14v4"></path>
            </svg>
          )
        + icon #8: Customer
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
          )
        + icon #9: Staff
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
          )
        + icon #10: Report
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M7 3v4h4"></path>
                <path d="M9 17l0 4"></path>
                <path d="M17 14l0 7"></path>
                <path d="M13 13l0 8"></path>
                <path d="M21 12l0 9"></path>
            </svg>
          )
        + icon #11: Payment
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                <path d="M3 10l18 0"></path>
                <path d="M7 15l.01 0"></path>
                <path d="M11 15l2 0"></path>
            </svg>
          )     
        + icon #12: Time
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 12l2 3"></path>
                <path d="M12 7v5"></path>
            </svg>
          )
        + icon #13: Dark
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            </svg>
          )  
        + icon #14: Trash
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M4 7l16 0"></path>
                <path d="M10 11l0 6"></path>
                <path d="M14 11l0 6"></path>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
          ) 
        + icon #15: Check
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
            </svg>
          )    
        + icon #16: Chef
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z"></path>
                <path d="M6.161 17.009l11.839 -.009"></path>
            </svg>
          )
        + icon #17: Edit
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                <path d="M16 5l3 3"></path>
            </svg>          
            ) 
        + icon #15: Share
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1"></path>
                <path d="M12 14v-11"></path>
                <path d="M9 6l3 -3l3 3"></path>
            </svg>
          )    
        + icon #16: invoice
          - (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1.5">
                <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                <path d="M9 7l4 0"></path>
                <path d="M9 11l4 0"></path>
            </svg>
          )
    7. Background color and color 
        + background body  :#ffffff;
        + background header : #ffffff;
        + Sidebar background : #f9fafb;
        + POs background : #f9fafb;
        + Header table background : #f9fafb;
        + payment bottom : #f9fafb;
        + Main color :#a855f7;
        + Main color gray : #1f2937;
        + Active color :#0f172a;
        + Availible Status :#16a34a;
        + Unavailible Status :rgb(148, 21, 21);
        + Border color :rgb(198, 198, 198);
        + border chef status : rgb(243, 176, 33);
        + background chef status : rgb(226, 189, 110);
        + border chef cancel : rgb(148, 21, 21);
        + background chef cancel : rgb(214, 111, 111);
        + border order payment-paid status : #16a34a;
        + background order payment-paid status : #dcfce7;
        + border order payment-bill status : #0284c7;
        + background order payment-bill status : #e0f2fe;    
    8. Break point responsive
        + sm: ≥640px
        + md: ≥768px
        + lg: ≥1024px
        + xl: ≥1280px
        + 2xl: ≥1536px

==================================
II. Pages
    # All pages this website
        1. Home dashboard
        2. Orders
        3. POs
        4. Setting 
==================================

==================================
# Dashboard show details
  .> Section Statistics 
    + Today's Orders
        - Total order : 4
        - Rank : up arrow 100%
        - Data from ytd
    + Today's Rearnings
        - Total earns : 2500$
        - Rank : up arrow 2456%
        - Data from ytd
    + Today's Customer
        - Total customer : 20
        - Rank : up arrow 200%
        - Data from ytd
    + Today's Avg daily Earnings (Month)
        - Total earns : 11000$
        - Rank : up arrow 12345.12%
        - Data from ytd
    + Chart of sales by month 
        - Earns : 5000$
        - Sale this month
        - Rank : down arrow -2.24%
        - Since previous month
        - earns 0$ - 3500$
  
  .> Today Orders
    + Order #00001
        - table number : T-9 
        - Food name : Althea Bolton
        - Order number : #34
        - Status : Paid
        - Status payment : Done
        - Order date october 23, 2024 15:27 PM 
        - Total order : 2 Item(s)
        - Total Price : 567$
    + Order #00002
        - table number : T-4
        - Food name : Holly Bailey
        - Order number : #33
        - Status : Paid
        - Status payment : Done
        - Order date october 23, 2024 15:27 PM 
        - Total order : 3 Item(s)
        - Total Price : 1234$
    + Order #00003
        - table number : T-3 
        - Food name : ---
        - Order number : #32
        - Status : Billed
        - Status payment : Waiting for payment
        - Order date october 23, 2024 15:27 PM 
        - Total order : 2 Item(s)
        - Total Price : 123$
    + Order #00004
        - table number : T-8
        - Food name : ---
        - Order number : #31
        - Status : Billed
        - Status payment : Waiting for payment
        - Order date october 23, 2024 15:27 PM 
        - Total order : 2 Item(s)
        - Total Price : 301$

# Orders show details
  .> Section KOT
    # Filter date to date and button category : In Kitchen (30), Food is Ready (0), Food is Served (0)
    + KOT #30 
        - KOT #30 
        - Total order : 5 Item(s)
        - Order number : Order #30
        - Order date : october 23, 15:27 PM
        - Chef name : Jaquelyn Battle 
        - Category : In Kitchen
        - Item Name and QTY by lists
        - Food name1 : Idlii Sambar , qty : 2
        - Food name2 : IChilli Paneer , qty : 1
        - Food name3 : Veg Manchow Soup , qty : 2
        - Food name4 : Paneer Tikka , qty : 2
        - Food name5 : Dal Makhani , qty : 3
    + KOT #29 
        - KOT #29 
        - Total order : 4 Item(s)
        - Order number : Order #30
        - Order date : october 23, 15:27 PM
        - Chef name : Jaquelyn Battle 
        - Category : In Kitchen
        - Item Name and QTY by lists
        - Food name1 : Idlii Sambar , qty : 2
        - Food name2 : IChilli Paneer , qty : 1
        - Food name3 : Veg Manchow Soup , qty : 2
        - Food name4 : Paneer Tikka , qty : 2
        - Food name5 : Dal Makhani , qty : 3

# POs page
  .> Section Foods
    # Search input
    # Button filter Show all, Starters, Main course, Breads, Rice
    + Food Menu #1 
        - Food name : Buttle Chicken
        - Price : 25$
        - Image : ---.jpg
        - Status : Ready to Cook
    + Food Menu #2
        - Food name : Grilled Salmon
        - Price : 32$
        - Image : ---.jpg
        - Status : Ready to Cook
    + Food Menu #3 
        - Food name : Margherita Pizza
        - Price : 18$
        - Image : ---.jpg
        - Status : Ready to Cook
    + Food Menu #4 
        - Food name : Beef Tenderloin Steak
        - Price : 38$
        - Image : ---.jpg
        - Status : Cook
    + Food Menu #5 
        - Food name : Caesar Salad
        - Price : 25$
        - Image : ---.jpg
        - Status :Ready to Cook
    + Food Menu #6 
        - Food name : Shrimp Scampi Pasta
        - Price : 26$
        - Image : ---.jpg
        - Status :Ready to Cook
    + Food Menu #7 
        - Food name : Chocolate Lava Cake
        - Price : 25$
        - Image : ---.jpg
        - Status :Ready to Cook
    + Food Menu #8 
        - Food name : Mushroom Risotto
        - Price : 25$
        - Image : ---.jpg
        - Status :Ready to Cook
    + Food Menu #9 
        - Food name : Buttle Chicken
        - Price : 25$
        - Image : ---.jpg
        - Status :Ready to Cook
    + Food Menu #10
        - Food name : Pan-Seared Duck Breast
        - Price : 35$
        - Image : ---.jpg
        - Status :Ready to Cook

  .> Section Payment
    + Order number : #12
    + Icon table : --- 
    + Table number : #12
    + Icon setting : ---
    + Pax : showing 2
    + Icon edit : ---
    + Select staff : john deo
    + Header list item : Item name, Qty, Price, Amount, Action
    + Item #1 
        - Food name : Pan-Seared Duck Breast
        - Qty : 1
        - Price : $25 
        - Amount : $25
    + Item #2 
        - Food name : Buttle Chicken
        - Qty : 1
        - Price : $25 
        - Amount : $25
    + Item #3 
        - Food name : Mushroom Risotto
        - Qty : 1
        - Price : $25 
        - Amount : $25
    + Item(s) : 3
    + Sub total : 350$
    + SGST (2.5%) : 9.235$
    + CGST (2.5%) : 9.235$
    + Total : 400$
    + Button KOT
    + Button Bill

# Setting show details
  .> Section Reservations
     + Header setting : Restaurant information, App setting, Branch setting, Currencise, Email setting, Taxes, Payment Getway, Theme setting
     + Tab showing : Staff, Reservations
     + Show a week : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
     + Monday showing : Monday
     + Header table : Slot type, Start time, End time, Time slot difference, Availible  
     + body table 
       - Row #1 : Breakfast, 08:00, 11:00, 30minutes, Check Yes
       - Row #2 : Lunch, 12:00, 17:00, 60minutes, Check Yes
       - Row #3 : Dinner, 18:00, 22:00, 60minutes, Check Yes
    + Button save

