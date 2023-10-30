<!--suppress HtmlDeprecatedAttribute -->
<div align="center">
  
# Rent

<p>
  <b>A rental store API for my database organization final project. </b>
  <br/>
  ⚠️ This is part of a <a href="https://github.com/noahhusby/university"><strong>larger collection of projects</strong></a> for university. ⚠️
  <br/><br/>
</p>

[![](https://github.com/noahhusby/rent/actions/workflows/build.yml/badge.svg)](https://github.com/noahhusby/rent/actions/workflows/build.yml)
[![](https://img.shields.io/github/license/noahhusby/rent)](https://github.com/noahhusby/rent/blob/main/LICENSE)
</div>

## For the professor / TA

This project is written using the Springboot framework. All of our SQL queries and connections are handled by Springboot's JPA library.
As such, the queries are automatically executed using the annotations in the entities found in [/model/dao](https://github.com/noahhusby/rent/tree/main/src/main/java/com/noahhusby/rent/model/dao).

To satisfy the requirements of the assignment, I manually wrote all the SQL queries and placed them into [RentApplication.java](https://github.com/noahhusby/rent/blob/main/src/main/java/com/noahhusby/rent/RentApplication.java).
The reason we took this approach is to try to match the exact frameworks and libraries used in the industry.
Springboot allows us to build a simple, but robust backend server for our project. We still had to write all the annotations
and consider all SQL design constraints so the goal of the project is still met. If there is any concern with this framework,
please reach out to me directly.

## License

Distributed under the GNU General Public License v3. See `LICENSE`
