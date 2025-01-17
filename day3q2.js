<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signup Page</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="signup-container">
      <h2>Sign Up</h2>
      <form action="/signup" method="post">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="semail" name="password" required />
        </div>
        <div class="input-group">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="spassword"
            name="confirm-password"
            required
          />
        </div>
        <button onclick="signup()" type="submit">Sign Up</button>
      </form>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
<style>
   {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffff00;
  }

  .signup-container {
    background-color: #fff;
    padding: 20px 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
  }

  .signup-container h2 {
    margin-bottom: 20px;
    color: #333;
  }

  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }

  .input-group label {
    display: block;
    margin-bottom: 5px;
    color: #666;
  }

  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>