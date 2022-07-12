package com.franco.carsAPI.model.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }
    /*
    @Bean
    protected CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://g3c5v2-env.eba-t2nwkrxr.us-east-1.elasticbeanstalk.com"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

     */

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests()
                .antMatchers("/swagger-ui.html#/**",
                        "/v2/api-docs",
                        "/swagger-ui/**",
                        "/swagger-resources/configuration/ui",
                        "/swagger-resources",
                        "/swagger-resources/configuration/security",
                        "/swagger-ui.html",
                        "/swagger-ui.html/**",
                        "/webjars/*").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/login",
                        "/user").permitAll()
                .antMatchers(HttpMethod.GET,
                        "/product/**",
                        "/categories/**",
                        "/city/**",
                        "/feature/**",
                        "/reservation/**",
                        "/policy/**",
                        "/user/**",
                        "/favorite/**").permitAll()
                .antMatchers(HttpMethod.POST,
                        "/reservation/**").hasAuthority("ROLE_CLIENT")
                .antMatchers(HttpMethod.DELETE,
                        "/reservation/**").hasAuthority("ROLE_CLIENT")
                .antMatchers("/user/**",
                        "/categories/**",
                        "/city/**",
                        "/country/**",
                        "/feature/**",
                        "/feature_product/**",
                        "/image/**",
                        "/location/**",
                        "/policy/**",
                        "/policy_product",
                        "/product/**",
                        "/reservation/**",
                        "/score/**",
                        "/user/**"
                        ).hasAuthority("ROLE_ADMIN")
                .anyRequest().authenticated()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
