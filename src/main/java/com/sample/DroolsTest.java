package com.sample;

import java.io.FileReader;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import java.util.Arrays;
import java.util.Date;

import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.FactHandle;

public class DroolsTest {

    public static final void main(String[] args) {
    	System.out.println(System.getProperty("user.dir"));
    	
        try {
            // load up the knowledge base
	        KieServices ks = KieServices.Factory.get();
    	    KieContainer kContainer = ks.getKieClasspathContainer();
        	KieSession kSession = kContainer.newKieSession("ksession-rules");
        	
        	String path = System.getProperty("user.dir") + "\\test";
        	
        	List<Vacina.TipoVacina> tipos = new LinkedList<Vacina.TipoVacina>();
        	List<Camara> camaras = new LinkedList<Camara>();
        	List<Gerente> gerentes = new LinkedList<Gerente>();
        	
        	/*
        	
        	Vacina.TipoVacina[] tipos = {	new Vacina.TipoVacina("CoronaVac", -2, 8, 5000),
        									new Vacina.TipoVacina("Covidshield", -4, 10, 2000) };
        	
        	List<Gerente> gerentes = new LinkedList<Gerente>(Arrays.asList(new Gerente("Gerente 01", "g01"), 
        							new Gerente("Gerente 02", "g02"), 
        							new Gerente("Gerente 03", "g03"), 
        							new Gerente("Gerente 04", "g04"), 
        							new Gerente("Gerente 05", "g05")));
        	
        	Camara[] camaras = {	new Camara("c01", new Vacina(tipos[1], new Date(), null, false), gerentes), 
        							new Camara("c02", new Vacina(tipos[1], new Date(), null, false), gerentes),
        							new Camara("c03", new Vacina(tipos[1], new Date(), null, false), gerentes),
        							new Camara("c04", new Vacina(tipos[1], new Date(), null, false), gerentes),
        							new Camara("c05", new Vacina(tipos[1], new Date(), null, false), gerentes),
        							new Camara("c06", new Vacina(tipos[0], new Date(), null, false), gerentes),
        							new Camara("c07", new Vacina(tipos[0], new Date(), null, false), gerentes),
        							new Camara("c08", new Vacina(tipos[0], new Date(), null, false), gerentes),
        							new Camara("c09", new Vacina(tipos[0], new Date(), null, false), gerentes),
        							new Camara("c10", new Vacina(tipos[0], new Date(), null, false), gerentes),	};
        	*/
        	List<Thread> threads = new LinkedList<Thread>();

            // go !
        	int sensorid = 0;
            for (Camara c : camaras) {
            	FactHandle f = kSession.insert(c);
            	threads.add(new Thread(new GpsSensorWrapper("s" + String.format("%01d", sensorid), kSession, f)));
            	sensorid += 1;
            	threads.add(new Thread(new TempSensorWrapper("s" + String.format("%01d", sensorid), kSession, f)));
            	sensorid += 1;
            }
            
            for (Gerente g : gerentes) {
            	FactHandle f = kSession.insert(g);
            	threads.add(new Thread(new GpsSensorWrapper("s" + String.format("%01d", sensorid), kSession, f)));
            	sensorid += 1;
            }
            
            for (Thread t : threads) {
            	t.start();
            }
            
            for (Thread t : threads) {
            	t.join();
            }
            
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

}
