package se.sigma.cognitive.security.model.result.results;


import lombok.Data;
import javax.persistence.*;

@Data
@Embeddable
public class Test1Result {


    private boolean answer;
    private long time;





}
