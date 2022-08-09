using Interfaces.Commands;
using Interfaces.Queries;
using Microsoft.AspNetCore.Mvc;
using Models.Authentication;

namespace AuraDeity.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationQuery _authenticationQuery;
        private readonly IAuthenticationCommand _authenticationCommand;

        public AuthenticationController(
            IAuthenticationQuery authenticationQuery,
            IAuthenticationCommand authenticationCommand)
        {
            _authenticationQuery = authenticationQuery;
            _authenticationCommand = authenticationCommand;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var token = await _authenticationQuery.LoginIfUserExistsAsync(loginModel);

            if (string.IsNullOrEmpty(token))
            {
                return NotFound();
            }
            
            return Ok(token);
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] SignupModel signupModel)
        {
            var processResult = await _authenticationCommand.SignUpAsync(signupModel);

            if (string.IsNullOrEmpty(processResult))
            {
                return BadRequest();
            }

            return Ok(processResult);
        }
    }
}
