# Filtering Data

1. Retrieve all products whose `unit_price` is greater than 1,000.

2. Find all customers who live in Kenya. Display their first name, last name, and city. In the output, use the column headings **First Name**, **Last Name** and **City** instead of the default column headings.

3. A supplier directory needs to include only suppliers whose country is not recorded as Kenya. Retrieve their names and countries.

4. Find all products with a `unit_price` between 1,000 and 5,000, inclusive.

5. Retrieve all orders whose `order_status` is either `Pending` or `Processing`.

6. Find all customers whose first name begins with the letter `A`. _(Hint: use the [`SUBSTRING`](https://learn.microsoft.com/en-us/sql/t-sql/functions/substring-transact-sql) function.)_

7. Retrieve all employees who were hired after 1 January 2023 but before 1 January 2025.

8. Find all products whose `cost_price` is greater than or equal to their `unit_price`.

9. The warehouse team wants to investigate products with critically low stock. Retrieve inventory records where `quantity_in_stock` is less than or equal to 5 **and** less than `reorder_level`.

10. Find customers whose last name ends with the letter `n`. _(Hint: use the [`SUBSTRING`](https://learn.microsoft.com/en-us/sql/t-sql/functions/substring-transact-sql) and [`LEN`](https://www.w3schools.com/sql/func_sqlserver_len.asp) functions.)_

11. Retrieve all products whose names contain the word `Pro`, regardless of where it appears in the name. _(Hint: check out the use of [LIKE](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/like-transact-sql?view=sql-server-ver17))_

12. Find all customers whose email addresses contain `gmail.com`.

13. Retrieve all employees whose first names contain exactly five characters. _(Hint: use the [`LEN`](https://learn.microsoft.com/en-us/sql/t-sql/functions/len-transact-sql) function.)_

14. Find all products whose names begin with the first three letters `Zep`. _(Hint: use the [`LEFT`](https://learn.microsoft.com/en-us/sql/t-sql/functions/left-transact-sql) function.)_

15. Retrieve all customers whose first name starts with a letter between `A` and `M`, inclusive.

16. Find all orders that have not been assigned to an employee.

17. Retrieve all products created in the year 2025. _(Hint: use the [`YEAR`](https://learn.microsoft.com/en-us/sql/t-sql/functions/year-transact-sql) function.)_

18. Find all suppliers whose names contain the word `Tech` or whose country is `Kenya`.

19. Retrieve all customers whose email addresses have letter `a` immediately before the `@` symbol. _(Hint: use the [`CHARINDEX`](https://learn.microsoft.com/en-us/sql/t-sql/functions/charindex-transact-sql) function.)_

20. Find all customers whose either first name **or** last name begin with a vowel (`A`, `E`, `I`, `O`, or `U`). Return their first name, last name, and email address.

21. Retrieve all payments that have a `payment_status` of `Completed` and a `payment_method` other than `Paypal`. Order the output in ascending order of payment_method.

22. Find all customers whose last character of first name and last character of the last name is the same letter.

23. Retrieve all products whose names end with a digit. _(Hint: use the [`RIGHT`](https://learn.microsoft.com/en-us/sql/t-sql/functions/right-transact-sql) function.)_

24. Find all orders placed in December 2025. _(Hint: use the [`MONTH`](https://learn.microsoft.com/en-us/sql/t-sql/functions/month-transact-sql) and [`YEAR`](https://learn.microsoft.com/en-us/sql/t-sql/functions/year-transact-sql) functions.)_

25. Find all orders placed in December 2025 that have not been assigned to an employee. _(Hint: use the [`MONTH`](https://learn.microsoft.com/en-us/sql/t-sql/functions/month-transact-sql) and [`YEAR`](https://learn.microsoft.com/en-us/sql/t-sql/functions/year-transact-sql) functions.)_

26. Find all customers whose email addresses have more than 20 characters. _(Hint: use the [`LEN`](https://learn.microsoft.com/en-us/sql/t-sql/functions/len-transact-sql) function.)_

## Boss Challenge

The business wants to classify its products according to their selling prices.

Using the `products` table, write a query that returns the product name, selling price, and a calculated column named `Price Category`.

Classify each product using the following rules:

- If the selling price is below 500, label it **Budget**.
- If the selling price is between 500 and 1,000, inclusive, label it **Mid-Range**.
- If the selling price is above 1,000, label it **Premium**.

Your output should contain exactly three columns: `Product Name`, `Selling Price`, and `Price Category` and should be sorted in ascending order of 'Price Category'.

**Requirement:** Use a `CASE` expression to classify the products.
