

$(document).ready(function() {

    $('#datetimePicker').datetimepicker();
    $('#dobPicker').datetimepicker({ format: 'DD-MM-YYYY', viewMode: 'years' });

    $('.enter-btn').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#enter").offset().top}, 1000);
    });
    $('.prize-btn').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $("#details").offset().top}, 1000);
    });

    if(window.location.hash) {
         $('html, body').animate({scrollTop: $("#entry_form").offset().top}, 1000);
    }
	
    $('.form-btn').on('click', function(e){
        e.preventDefault();
        $("#entry_form").slideToggle(1000);
    });
	$("#entry_form").hide();
	
    $('#entry_form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                
                validators: {
                    notEmpty: {
                        message: 'Please enter your first name'
                    }
                }
            },
			last_name: {
                
                validators: {
                    notEmpty: {
                        message: 'Please enter your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid email address'
                    }
                }
            },
			street: {
                
                validators: {
                    notEmpty: {
                        message: 'Please enter your street'
                    }
                }
            },
			suburb: {
                
                validators: {
                    notEmpty: {
                        message: 'Please enter your suburb'
                    }
                }
            },
			postcode: {
                
                validators: {
					notEmpty: {
                        message: 'Please enter your postcode'
                    },
					stringLength: {
						min: 4,
						max: 4,
						message: 'Please enter 4 digits postcode'
					}
                }
            },
			state: {
                
                validators: {
                    notEmpty: {
                        message: 'Please enter your state'
                    }
                }
            },
			barcode: {
                
                validators: {
					notEmpty: {
                        message: 'Please enter your barcode number'
                    }
                },
                stringLength: {
                    min: 4,
                    max: 4,
                    message: 'Please enter last 4 digits of barcode number'
                }
            },
            phone: {
                
                validators: {
                    notEmpty: {
                        message: 'Please enter your phone number'
                    }
                }
            },
            store: {
                
                validators: {
                    notEmpty: {
                        message: 'Please enter your store of purchase'
                    }
                }
            },
            terms:
             {
                
                validators: {
                    notEmpty: {
                        message: 'Please accept the terms and conditons'
                    }
                }
            },
            dob: {
                validators: {
                    notEmpty: {
                        message: 'Your Date of Birth is required and cannot be empty'
                    },
                    date: {
                        message: 'Date is invalid',
                        format: 'DD-MM-YYYY',
                    }                
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'The date is required and cannot be empty'
                    },
                    date: {
                        message: 'Date is invalid',
                        format: 'MM/DD/YYYY h:m A',
                    },
                    callback: {
                        message: 'Purchase date must be between 10/01/2015 09:00 AM - 05/04/2016 11:59 PM',
                        callback: function(value, validator) {
                            var m = new moment(value, 'MM/DD/YYYY h:m A', true);
                            if (!m.isValid()) {
                                return false;
                            }
                            return m.isAfter('10/01/2015 09:00 AM') && m.isBefore('05/04/2016 11:59 PM');
                        }
                    }
                
                }
            }
        }
    });

    $('#datetimePicker')
    .on('dp.change dp.show', function(e) {
        // Validate the date when user change it
        //$('#defaultForm').data('bootstrapValidator').revalidateField('datetimePicker');
        // You also can call it as following:
        $('#entry_form').bootstrapValidator('revalidateField', 'date');
    });

    $('#dobPicker')
    .on('dp.change dp.show', function(e) {
        // Validate the date when user change it
        //$('#defaultForm').data('bootstrapValidator').revalidateField('datetimePicker');
        // You also can call it as following:
        $('#entry_form').bootstrapValidator('revalidateField', 'dob');
    });

});