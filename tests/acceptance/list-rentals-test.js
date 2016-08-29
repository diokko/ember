/** 
* this is the file of test rentals 
*/

import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

/*
test('should list available rentals.', function (assert) {
    visit('/'); 
    andThen(function(){
        assert.equal(find('.listing').length, 3, 'should see 3 listings');,
    });
});

test('should link to information about the company.', function (assert) {
});

test('should link to contact information.', function (assert) {
});

test('should filter the list of rentals by city.', function (assert) {
});*/